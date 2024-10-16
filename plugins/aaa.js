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

const url = `https://sinhalasub.lk/links/j85tvdsnxl/`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const dlurl = $("#link").attr('href')
console.log(dlurl)
await conn.sendMessage(from, {video: {url: dlurl},caption: botwatermark},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
