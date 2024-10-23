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

    const url = `https://cinesubz.co/api-rwjdzuehbdrwjdzuehbdzjyvxo2bhh0azjyvxo2bhh0auehbdruehbdrwjdzuehbdzjyvxo2bhh0azjyvxo2bhh0auehbdrwjdzuehbwjdzuehbdzjyvxo2bhh0azjyvxo2bhh0a/wzheltoln7/`
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const dlurl = $("#link").attr('href')
    const sl = dlurl.search("https://google.com/server4/1:/")
    if(!sl == -1) {
        const dlurl2 = dlurl.replace("https://google.com/server4/1:/","https://ima04.cskinglk.xyz/server4/")
        console.log(dlurl2)
    }
    
    console.log(dlurl)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
