const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "qrcode",
    desc: "Generate qr code.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🔄")
if(!q) return reply("Give me a text to generate qr code.")
let load = `*🔄 Gᴇɴᴇʀᴀᴛɪɴɢ Yᴏᴜʀ Qʀ Cᴏᴅᴇ...*`
await conn.sendMessage(from,{text:load},{quoted:mek});

const qrcode = `https://barcode.orcascan.com/?data=${q}&text=${q}&format=png`
let desc = `*✅ Hᴇʀᴇ Iꜱ Yᴏᴜʀ Qʀ Cᴏᴅᴇ ✅*\n\n\n${botwatermark}`
await conn.sendMessage(from,{image:{url:qrcode},caption:desc});
await m.react("✅")
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
