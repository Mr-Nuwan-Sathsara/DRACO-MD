const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "restart",
    desc: "Restart the bot.",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return
await m.react("🔄")
const {exec} = require("child_process")
reply("*❬❬ 🔄 Dʀᴀᴄᴏ-Mᴅ Bᴏᴛ Rᴇꜱᴛᴀʀᴛɪɴɢ... ❭❭*\n\n\n" + botwatermark)
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
