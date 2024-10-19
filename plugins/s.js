const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "s",
    desc: "Search movies in sinhalasub.lk.",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = `https://sinhalasub.lk/?s=${q}`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()

    if(!q) {
        await m.react("❌")
        return reply("*❗️ Give movie name. ❗️*")
    }else if(resulterror == `No results to show with ${q}`) {
        await m.react("❌")
        return reply("*❗️ Mᴏᴠɪᴇ Nᴏᴛ Fᴏᴜɴᴅ. ❗️*")
    }

await m.react("🎬")
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

let desc = `

surl :
${url}
https://github.com/Mr-Nuwan-Sathsara/DRACO-MD
https://github.com/Mr-Nuwan/DRACO-MD/edit/master

mv1 = ${mvdata[0].title}

mv2 = ${mvdata[1].title}

mv3 = ${mvdata[2].title}

mv4 = ${mvdata[3].title}

mv5 = ${mvdata[4].title}

\n\n\n${botwatermark}`

await conn.sendMessage(from, {text: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const urll = urls[1]
const urlll = urls[2]
const response = await axios.get(url)
const $ = cheerio.load(response.data)

await m.react("🎬")
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const p1080 = $$("tr:nth-child(1) > td:nth-child(1) > a").attr('href')
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const p720 = $$("tr:nth-child(2) > td:nth-child(1) > a").attr('href')
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const p480 = $$("tr:nth-child(3) > td:nth-child(1) > a").attr('href')
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const sub = $$("tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > a").attr('href')
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`

let desc = `
*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*📥 Download Links 📥*
*1️⃣ 1080P(${ms21080}${gbormb1080}) :*
${p1080}

*2️⃣ 720P(${ms2720}${gbormb720}) :*
${p720}

*3️⃣ 480P(${ms2480}${gbormb480}) :*
${p480}

*4️⃣ Sinhala Subtitle :*
${sub}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

console.log(url)
console.log(urll)
console.log(urlll)

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()

await m.react("🎬")
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

const url2 = mvdata[1].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const p1080 = $$("tr:nth-child(1) > td:nth-child(1) > a").attr('href')
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const p720 = $$("tr:nth-child(2) > td:nth-child(1) > a").attr('href')
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const p480 = $$("tr:nth-child(3) > td:nth-child(1) > a").attr('href')
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const sub = $$("tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > a").attr('href')
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`

let desc = `
*📝 Title :* ${mvdata[1].title}
*⭐️ Rating :* ${mvdata[1].rating}
*📆 Year :* ${mvdata[1].year}
*🔗 Url :* ${mvdata[1].link}

*📥 Download Links 📥*
*1️⃣ 1080P(${ms21080}${gbormb1080}) :*
${p1080}

*2️⃣ 720P(${ms2720}${gbormb720}) :*
${p720}

*3️⃣ 480P(${ms2480}${gbormb480}) :*
${p480}

*4️⃣ Sinhala Subtitle :*
${sub}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
