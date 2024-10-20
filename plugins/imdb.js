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
  const allmovies = $("#__next > main > div.ipc-page-content-container.ipc-page-content-container--full.sc-253ad8fd-0.iFnBOf > div.ipc-page-content-container.ipc-page-content-container--center > section > div > div.ipc-page-grid__item.ipc-page-grid__item--span-2 > section:nth-child(4) > div.sc-e8e4ce7-2.gdpdyr > ul")
  allmovies.each(function(){
    title = $(this).find(".ipc-metadata-list-summary-item__t").text()

    movies.push({title})
  })

  console.log(movies)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
