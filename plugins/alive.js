const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require('@whiskeysockets/baileys')
const fs = require('fs')



cmd({
    pattern: "alive",
    desc: "Check bot online or offline",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();

const prefix = config.PREFIX

if(config.BUTTONS == "true"){
    
    await m.react("👋")
    await conn.sendMessage(from,{audio: {url:`media/alive.mp3`},mimetype:"audio/mpeg",ptt:true},{quoted: mek})


    let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
	        text: config.ALIVE_MSG
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `${botwatermark}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
		      ...(await prepareWAMessageMedia({ image : {url: config.ALIVE_IMG}}, { upload: conn.waUploadToServer})), 
            title: ``,
            gifPlayback: true,
	        subtitle: ``,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"🔗 Wʜᴀᴛꜱᴀᴘᴘ Cʜᴀɴɴᴇʟ\",\"url\":\"https://whatsapp.com/channel/0029VafgZo4ATRSoLX8Kjr2S\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"🔗 Yᴏᴜᴛᴜʙᴇ Cʜᴀɴɴᴇʟ\",\"url\":\"https://youtube.com/@mrunknownofc?si=SSDSiEsxZ8tqGxmM\",\"merchant_url\":\"https://www.google.com\"}"
              },
                {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"🔗 TɪᴋTᴏᴋ Pᴀɢᴇ\",\"url\":\"https://m.tiktok.com/@mrunknownofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
		{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"📋 Mᴀɪɴ Mᴇɴᴜ","id":"${prefix}menu"}`
		},
		{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"📍 Pɪɴɢ","id":"${prefix}ping"}`
		}
              
           ],
          })
        })
    }
  }
}, { quoted: mek })

await conn.relayMessage(from, msg.message, {
  messageId: msg.key.id
    })
}else{
    
await m.react("👋")
await conn.sendMessage(from,{audio: {url:`media/alive.mp3`},mimetype:"audio/mpeg",ptt:true},{quoted: mek})
return await conn.sendMessage(from,{image: {url:config.ALIVE_IMG},caption: config.ALIVE_MSG + "\n\n\n" + botwatermark})
}           

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "📍 Pɪɴɢ",
    quoted_includes: "⟡━⟪ 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 ⟫━⟡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        await m.react("📍")
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '🔄 Cʜᴇᴄᴋɪɴɢ Cʟᴏᴡɴ-Mᴅ Bᴏᴛ Pɪɴɢ...' }, {quoted:mek})
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `📍 Cʟᴏᴡɴ-Mᴅ Bᴏᴛ Pɪɴɢ: ${ping}ms` })
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
