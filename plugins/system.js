const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const { botwatermark } = require('../botwatermark')
const {readEnv} = require('../lib/database')


cmd({
    pattern: "system",
    alias: ["status"],
    desc: "Check system informations",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

await m.react("🔄")
let status = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🐲 」*

*╭─💻 System Informations 💻─◦•◦❥•*
*╎*
*╎* *⏰ Uᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}
*╎* *💳 Rᴀᴍ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╎* *💻 Pʟᴀᴛꜰᴏʀᴍ :* ${os.hostname()}
*╎* * Dᴇᴠᴇʟᴏᴘᴇʀ :* Nuwan Sathsara
*╎* *👑 Oᴡɴᴇʀ :* ${config.OWNER_NAME}
*╎* *🤖 Bᴏᴛ Nᴀᴍᴇ :* DRACO-MD
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:`https://telegra.ph/file/f22fc8f686248603d53ff.jpg`},caption:status},{quoted:mek});
await m.react("✅")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
