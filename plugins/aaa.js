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

    const url = `https://sinhalasub.lk/?s=strange+darling`
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const mvlink = $("#contenedor > div.module > div.content.rigth.csearch > div > div.result-item > article > div.details > div.title > a").attr('href')
    console.log(mvlink)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
