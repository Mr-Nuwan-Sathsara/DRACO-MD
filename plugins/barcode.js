const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "barcode",
    desc: "Generate barcodes.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🔄")
if(!q) return reply("Give me a text to generate barcode.")
let load = `*🔄 Gᴇɴᴇʀᴀᴛɪɴɢ Yᴏᴜʀ BᴀʀCᴏᴅᴇ...*`
await conn.sendMessage(from,{text:load},{quoted:mek});

const barcode = `https://barcode.orcascan.com/?type=code128&data=${q}&text=${q}&format=png`
let desc = `*✅ Hᴇʀᴇ Iꜱ Yᴏᴜʀ BᴀʀCᴏᴅᴇ ✅*\n\n\n${botwatermark}`
await conn.sendMessage(from,{image:{url:barcode},caption:desc});
await m.react("✅")
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
