const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "imdb",
    desc: "Get movie informations from imdb.com.",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  const url = `https://www.imdb.com/find/?q=${q}&ref_=nv_sr_sm`
  const response = await axios.get(url)
  const $ = cheerio.load(response.data)
  const movies = []
  const allmovies = $("ul")
  allmovies.each(function(){
    title = $(this).find("li div.ipc-metadata-list-summary-item__c div a").text()

    movies.push({title})
  })

  console.log(movies)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
