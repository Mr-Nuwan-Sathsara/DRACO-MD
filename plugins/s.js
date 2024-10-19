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
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

let movielist = `${mvdata[0].title} | ${mvdata[0].year}`
if(mvdata[1]) movielist += `\n\n${mvdata[1].title} | ${mvdata[1].year}`
if(mvdata[2]) movielist += `\n\n${mvdata[2].title} | ${mvdata[2].year}`
if(mvdata[3]) movielist += `\n\n${mvdata[3].title} | ${mvdata[3].year}`
if(mvdata[4]) movielist += `\n\n${mvdata[4].title} | ${mvdata[4].year}`
if(mvdata[5]) movielist += `\n\n${mvdata[5].title} | ${mvdata[5].year}`
if(mvdata[6]) movielist += `\n\n${mvdata[6].title} | ${mvdata[6].year}`
if(mvdata[7]) movielist += `\n\n${mvdata[7].title} | ${mvdata[7].year}`
if(mvdata[8]) movielist += `\n\n${mvdata[8].title} | ${mvdata[8].year}`
    
let desc = `

surl :
${url}

${movielist}

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
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})
    
    if(!mvdata[0]) return
    await m.react("🎬")

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
console.log(mek)

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
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[1]) return
    await m.react("🎬")

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

cmd({
    reply_pattern: "3",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[2]) return
    await m.react("🎬")

const url2 = mvdata[2].link
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
*📝 Title :* ${mvdata[2].title}
*⭐️ Rating :* ${mvdata[2].rating}
*📆 Year :* ${mvdata[2].year}
*🔗 Url :* ${mvdata[2].link}

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

cmd({
    reply_pattern: "4",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[3]) return
    await m.react("🎬")

const url2 = mvdata[3].link
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
*📝 Title :* ${mvdata[3].title}
*⭐️ Rating :* ${mvdata[3].rating}
*📆 Year :* ${mvdata[3].year}
*🔗 Url :* ${mvdata[3].link}

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

cmd({
    reply_pattern: "5",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[4]) return
    await m.react("🎬")

const url2 = mvdata[4].link
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
*📝 Title :* ${mvdata[4].title}
*⭐️ Rating :* ${mvdata[4].rating}
*📆 Year :* ${mvdata[4].year}
*🔗 Url :* ${mvdata[4].link}

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

cmd({
    reply_pattern: "6",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[5]) return
    await m.react("🎬")

const url2 = mvdata[5].link
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
*📝 Title :* ${mvdata[5].title}
*⭐️ Rating :* ${mvdata[5].rating}
*📆 Year :* ${mvdata[5].year}
*🔗 Url :* ${mvdata[5].link}

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

cmd({
    reply_pattern: "7",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[6]) return
    await m.react("🎬")

const url2 = mvdata[6].link
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
*📝 Title :* ${mvdata[6].title}
*⭐️ Rating :* ${mvdata[6].rating}
*📆 Year :* ${mvdata[6].year}
*🔗 Url :* ${mvdata[6].link}

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

cmd({
    reply_pattern: "8",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[7]) return
    await m.react("🎬")

const url2 = mvdata[7].link
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
*📝 Title :* ${mvdata[7].title}
*⭐️ Rating :* ${mvdata[7].rating}
*📆 Year :* ${mvdata[7].year}
*🔗 Url :* ${mvdata[7].link}

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

cmd({
    reply_pattern: "9",
    quoted_includes: "surl :",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const url = urls[0]
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const resulterror = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()
const mvdata = []
const movies = $("article")
movies.each(function(){
    const title = $(this).find(".title a").text()
    const rating = $(this).find(".rating").text()
    const year = $(this).find(".year").text()
    const link = $(this).find(".title a").attr('href')

    mvdata.push({title,rating,year,link})
})

    if(!mvdata[8]) return
    await m.react("🎬")

const url2 = mvdata[8].link
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
*📝 Title :* ${mvdata[8].title}
*⭐️ Rating :* ${mvdata[8].rating}
*📆 Year :* ${mvdata[8].year}
*🔗 Url :* ${mvdata[8].link}

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
