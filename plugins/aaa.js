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
    const allmv = []
    const $ = cheerio.load(response.data)
    const movies = $("article")
    movies.each(function(){
        link = $(this).find(".title a").attr('href')

        allmv.push({link})
    })

    console.log(allmv)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
