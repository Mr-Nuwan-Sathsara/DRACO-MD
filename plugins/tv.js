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

    let mvresult;
    if(allmv[0].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[1].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[2].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[3].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[4].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[5].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[6].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[7].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[8].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[9].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[10].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[11].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[12].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[13].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[14].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[15].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[16].tv) mvresult += `*Title :* ${allmv[0].title}`
    if(allmv[17].tv) mvresult += `*Title :* ${allmv[0].title}`
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
