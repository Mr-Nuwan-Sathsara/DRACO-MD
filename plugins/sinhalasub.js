const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "sinhalasub",
    desc: "Get sinhala subtitles.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  const url = `https://subz.lk/?s=fallen+angel`
  const response = await axios.get(url)
  const $ = cheerio.load(response.data)
  const allmv = []

  const movies = $("body > div.container > div.col-lg-8.col-md-6 > div > div")
  movies.each(function(){
    title = $(this).find(".mainShow-content bg-success a").text().trim()

    allmv.push({title})
  })

  console.log(allmv)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
