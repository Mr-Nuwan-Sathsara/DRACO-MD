const {cmd , commands} = require('../command')
const axios = require('axios')
const cheerio = require('cheerio')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "tv",
    desc: "test cmd.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const url = `https://sinhalasub.lk/?s=war`
    const response = await axios.get(url)
    const allmv = []
    const $ = cheerio.load(response.data)
    const movies = $(".result-item")
    movies.each(function(){
      title = $(this).find(".title a").text()
      link = $(this).find(".title a").attr('href')
      mv = $(this).find(".movies").text()
      tv = $(this).find(".tvshows").text()

        allmv.push({title,link,mv,tv})
    })

    console.log(allmv)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
