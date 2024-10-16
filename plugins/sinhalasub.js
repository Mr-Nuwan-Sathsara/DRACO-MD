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
console.log(noresult)

   if(!q){
        await m.react("❌")
        return reply("*❗️ Give movie name to download subtitle. ❗️*")
    }else if(noresult == `No results to show with `) {
        await m.react("❌")
        return reply("*❗️ Result not found!. ❗️*")
    }

    const url2 = $("#contenedor > div.module > div.content.rigth.csearch > div.search-page > div:nth-child(2) > article > div.details > div.title > a").attr('href')
    console.log(url2)
    const response2 = await axios.get(url2)
    const $$ = cheerio.load(response2.data)
    const subpage = $$(`#link-5095 > td:nth-child(1) > a`).attr('href')
    console.log(subpage)

    const response3 = await axios.get(subpage)
    const $$$ = cheerio.load(response3.data)
    const sublink = $$$("#link").attr('href')
	console.log(sublink)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
