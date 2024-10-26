const {cmd , commands} = require('../command')
const axios = require('axios')
const cheerio = require('cheerio')
const { botwatermark } = require('../botwatermark')

const fk = "HIHIHI"
cmd({
    pattern: "tv",
    desc: "test cmd.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const url = `https://sinhalasub.lk/tvshows/${q}/`
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const noresult = $("#contenedor > div.module > div.content.right > div > div > h2 > span").text()
    const cr = noresult.includes("404")
    if(cr = true) {
        await m.react("❌")
        return reply("*❗️ Can't find this tv show. ❗️*")
    }

    const allepisodes = []
    const episodes = $("#episodes")
    episodes.each(function(){
        epinumber = $(this).find(".numerando").text()
        epilink = $(this).find(".episodiotitle a").attr('href')

        allepisodes.push({epinumber,epilink})
    })

    console.log(allepisodes)
    console.log(fk)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
