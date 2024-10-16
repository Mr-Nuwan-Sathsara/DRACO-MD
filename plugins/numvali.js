const {cmd , commands} = require('../command')
const axios = require('axios')
const { botwatermark } = require('../botwatermark')


cmd({
    pattern: "numvali",
    desc: "Check phone number validate.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("📱")

if(!q) return reply("Give me phone number.")
if(!q.startsWith("+")) return reply("Invalid mobile number. Give your mobile number with country code.")

const apiUrl = `http://apilayer.net/api/validate?access_key=c404deed81111912eb6628f98eb579a9&number=${q}&country_code=&format=1`
const response = await axios.get(apiUrl)
const data = response.data

if(data.success == false) return reply("Give me correct phone number.")
let tf = `Invalid ❎`

if(data.valid == true) tf = `Valid ✅`

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗡𝗨𝗠𝗕𝗘𝗥 𝗩𝗔𝗟𝗜𝗗𝗔𝗧𝗘 𝗖𝗛𝗘𝗖𝗞𝗘𝗥 🐲 」*

*╭──📱 Number Details 📱──◦•◦❥•*
*╎*
*╎* *🔰 Vᴀʟɪᴅ :* ${tf}
*╎* *🔢 Nᴜᴍʙᴇʀ :* ${data.number}
*╎* *🔢 Lᴏᴄᴀʟ Fᴏʀᴍᴀᴛ :* ${data.local_format}
*╎* *🌍 Iɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ Fᴏʀᴍᴀᴛ :* ${data.international_format}
*╎* *🔖 Cᴏᴜɴᴛʀʏ Pʀᴇꜰɪx :* ${data.country_prefix}
*╎* *🏷️ Cᴏᴜɴᴛʀʏ Cᴏᴅᴇ :* ${data.country_code}
*╎* *🌍 Cᴏᴜɴᴛʀʏ :* ${data.country_name}
*╎* *🗺️ Lᴏᴄᴀᴛɪᴏɴ :* ${data.location}
*╎* *🎟️ Cᴀʀʀɪᴇʀ :* ${data.carrier}
*╎* *⚡ Lɪɴᴇ Tʏᴘᴇ :* ${data.line_type}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{text: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
