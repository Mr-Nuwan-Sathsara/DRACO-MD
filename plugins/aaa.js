const {cmd , commands} = require('../command')
const axios = require('axios')
const cheerio = require('cheerio')
const { botwatermark } = require('../botwatermark')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "a",
    desc: "test cmd.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🔁")
await conn.sendMessage(from, {document: {url: `https://mega.nz/embed/gv00kDrK#0KhJJQMAOHdrkN1zuVut2l2L72eYJosJGiCUS9Pr-Zk`},mimetype: "video/mp4",fileName: `movie ekah` + ".mp4",caption: `test done`},{quoted: mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
