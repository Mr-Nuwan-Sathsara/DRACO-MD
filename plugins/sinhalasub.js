const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "sinhalasub",
    desc: "Download movies sinhala subtitles.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = `https://cineru.lk/?s=${q}`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const noresult = $("#main-content > div.content > div.page-head > h2").text().trim()

   if(!q){
        await m.react("❌")
        return reply("*❗️ Give movie name to download subtitle. ❗️*")
    }else if(noresult == `Nothing Found`) {
        await m.react("❌")
        return reply("*❗️ Result not found!. ❗️*")
    }


}catch(e){
console.log(e)
reply(`${e}`)
}
})
