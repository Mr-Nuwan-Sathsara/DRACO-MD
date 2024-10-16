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

const url = `https://pirate.lk/?s=${q}`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const noresult = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()

   if(!q){
        await m.react("❌")
        return reply("*❗️ Give movie name to download subtitle. ❗️*")
    }else if(noresult == `No results to show with ${q}`) {
        await m.react("❌")
        return reply("*❗️ Subtitle not found!. ❗️*")
    }
    await m.react("🎬")
    const url2 = $("#contenedor > div.module > div.content.rigth.csearch > div.search-page > div:nth-child(2) > article > div.details > div.title > a").attr('href')
    const response2 = await axios.get(url2)
    const $$ = cheerio.load(response2.data)
    const subname = $$(#single > div.content.right > div.sheader > div.data).text().trim()
    const subpage = $$(`#link-5095 > td:nth-child(1) > a`).attr('href')

    const response3 = await axios.get(subpage)
    const $$$ = cheerio.load(response3.data)
    const sublink = $$$("#link").attr('href')

    await conn.sendMessage(from, {document: {url: sublink},fileName: subname,caption: botwatermark},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
