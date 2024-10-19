const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  getContentType,
  fetchLatestBaileysVersion,
  Browsers
} = require('@whiskeysockets/baileys')

const l = console.log
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')

const { botwatermark } = require('./botwatermark')

const ownerNumber = [config.OWNER_NUMBER]

//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
  if (!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
  const sessdata = config.SESSION_ID
  const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
  filer.download((err, data) => {
    if (err) throw err
    fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
      console.log("✅ DRACO-MD Session Downloaded")
    })
  })
}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//=============================================

async function connectToWA() {
  //===============Connect Mongodb==================
  const connectDB = require('./lib/mongodb')
  connectDB();
  //================================================
  const { readEnv } = require('./lib/database')
  const config = await readEnv();
  const prefix = config.PREFIX
  //================================================
  console.log("🔄 DRACO-MD Bot Connecting...");
  const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
  var { version } = await fetchLatestBaileysVersion()

  const conn = makeWASocket({
    logger: P({ level: 'silent' }),
    printQRInTerminal: false,
    browser: Browsers.macOS("Firefox"),
    syncFullHistory: true,
    auth: state,
    version
  })

  conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA()
      }
    } else if (connection === 'open') {
      console.log('🔄 DRACO-MD Plugins Installing... ')
      const path = require('path');
      fs.readdirSync("./plugins/").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
      });
      
     console.log('✅ DRACO-MD Plugins Installed')
     console.log('✅ DRACO-MD Bot Connected')

      let desc = `> *🐲 Dʀᴀᴄᴏ-Mᴅ Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ Cᴏɴɴᴇᴄᴛᴇᴅ ✅*\n\n*PREFIX:* ${config.PREFIX}\n*OWNER_NUMBER:* ${config.OWNER_NUMBER}\n*MODE:* ${config.MODE}\n*O_REACT:* ${config.O_REACT}\n*OWNER_REACT:* ${config.OWNER_REACT}\n*AUTO_READ_STATUS:* ${config.AUTO_READ_STATUS}\n*AUTO_REPLY:* ${config.AUTO_REPLY}\n*AUTO_VOICE:* ${config.AUTO_VOICE}\n*AUTO_STICKER:* ${config.AUTO_STICKER}\n*ALIVE_IMG:* ${config.ALIVE_IMG}\n*ALIVE_MSG:* ${config.ALIVE_MSG}\n\n\n` + botwatermark;

      conn.sendMessage(config.OWNER_NUMBER + "@s.whatsapp.net", { image: { url: `https://i.ibb.co/W0sVQht/Picsart-24-09-23-18-15-44-090.jpg` }, caption: desc })

    }
  })
  conn.ev.on('creds.update', saveCreds)

  conn.ev.on('messages.upsert', async (mek) => {
    mek = mek.messages[0]
    if (!mek.message) return
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast') return
    const m = sms(conn, mek)
    const type = getContentType(mek.message)
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const isGroup = from.endsWith('@g.us')
    const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const botNumber = conn.user.id.split(':')[0]
    const pushname = mek.pushName || 'Sin Nombre'
    const isMe = botNumber.includes(senderNumber)
    const isOwner = config.OWNER_NUMBER.includes(senderNumber) || isMe
    const botNumber2 = await jidNormalizedUser(conn.user.id);
    const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => { }) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
    const isReact = m.message.reactionMessage ? true : false
    const reply = (teks) => {
      conn.sendMessage(from, { text: teks }, { quoted: mek })
    }

    conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
        return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
      }
      let type = mime.split("/")[0] + "Message"
      if (mime === "application/pdf") {
        return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
      }
      if (mime.split("/")[0] === "image") {
        return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
      }
      if (mime.split("/")[0] === "video") {
        return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
      }
      if (mime.split("/")[0] === "audio") {
        return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
      }
    }

    //========================Owner React===========================================

    if (senderNumber.includes(config.OWNER_NUMBER) && config.O_REACT == "true") {
      if (isReact) return
      await m.react(config.OWNER_REACT)
    }

    //========================Work Type===========================================

    if (!isOwner && config.MODE === "private") return
    if (!isOwner && isGroup && config.MODE === "inbox") return
    if (!isOwner && !isGroup && config.MODE === "groups") return

    //============================================================================

    const events = require('./command')
    const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (isCmd) {
      const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
      if (cmd) {
        if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

        try {
          cmd.function(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply });
        } catch (e) {
          console.error("[PLUGIN ERROR] " + e);
        }
      }
    }

    //====================================================================================

    function extractUrls(text) {
      const urlRegex = /(?:https?:\/\/|www\.|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})([^\s,;]*)/gi;
      const urls = text.match(urlRegex);
      return urls && urls.length > 0 ? urls : ["no links"];
    }

    //=================================reply_cmd==========================================

    const reply_cmd = quoted && quoted.fromMe ? body.trim().split(" ")[0].toLowerCase() : false;

    if (reply_cmd) {
      const quoted_text = m && m.quoted && m.quoted.msg && m.quoted.msg.caption ? m.quoted.msg.caption : m && m.quoted && m.quoted.msg && m.quoted.msg.text ? m.quoted.msg.text : quoted && quoted.msg && quoted.msg.text ? quoted.msg.text : quoted && quoted.extendedTextMessage && quoted.extendedTextMessage.text ? quoted.extendedTextMessage.text : m && m.quoted && m.quoted.msg ? m.quoted.msg : null
      const cmd = events.commands.find((cmd) => quoted_text.includes(cmd.quoted_includes) && cmd.reply_pattern === (reply_cmd)) || events.commands.find((cmd) => quoted_text.includes(cmd.pattern) && cmd.reply_pattern === (reply_cmd))
      if (cmd) {

        if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })
        const urls = extractUrls(quoted_text) // array []
        try {
          cmd.function(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls });
        } catch (e) {
          console.error("[REPLY_PLUGIN ERROR] " + e);
        }
      }
    }


    //=================================jayarathne==========================================


    events.commands.map(async (command) => {
      if (body && command.on === "body") {
        command.function(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
        // console.log('hi')
        command.function(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
      } else if (
        (command.on === "image" || command.on === "photo") &&
        mek.type === "imageMessage"
      ) {
        command.function(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
      } else if (
        command.on === "sticker" &&
        mek.type === "stickerMessage"
      ) {
        command.function(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
      }
    });
    //============================================================================ 

  })
}
app.get("/", (req, res) => {
  res.send("✅ DRACO-MD Bot Started");
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
setTimeout(() => {
  connectToWA()
}, 4000);

