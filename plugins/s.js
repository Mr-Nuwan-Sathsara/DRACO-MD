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

let movielist = `1. ${mvdata[0].title}`
if(mvdata[1]) movielist += `\n\n2. ${mvdata[1].title}`
if(mvdata[2]) movielist += `\n\n3. ${mvdata[2].title}`
if(mvdata[3]) movielist += `\n\n4. ${mvdata[3].title}`
if(mvdata[4]) movielist += `\n\n5. ${mvdata[4].title}`
if(mvdata[5]) movielist += `\n\n6. ${mvdata[5].title}`
if(mvdata[6]) movielist += `\n\n7. ${mvdata[6].title}`
if(mvdata[7]) movielist += `\n\n8. ${mvdata[7].title}`
if(mvdata[8]) movielist += `\n\n9. ${mvdata[8].title}`
    
let desc = `*⬇️ Sinhalasub.lk Movie Database ⬇️*

surl : ${q}

${movielist}

\n\n\n${botwatermark}`

await conn.sendMessage(from, {image: {url: `https://sinhalasub.lk/wp-content/uploads/2023/08/icon.png`},caption: desc},{quoted: mek})

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

const omsg = m.quoted.msg
const sq1 = omsg.split("1. ")[1]
const sq2 = sq1.split("2.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("2. ")[1]
const sq2 = sq1.split("3.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("3. ")[1]
const sq2 = sq1.split("4.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("4. ")[1]
const sq2 = sq1.split("5.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("5. ")[1]
const sq2 = sq1.split("6.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("6. ")[1]
const sq2 = sq1.split("7.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("7. ")[1]
const sq2 = sq1.split("8.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("8. ")[1]
const sq2 = sq1.split("9.")[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

const omsg = m.quoted.msg
const sq1 = omsg.split("9. ")[1]
const sq2 = sq1.split(botwatermark)[0]
const url = `https://sinhalasub.lk/?s=${sq2}`
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

}catch(e){
console.log(e)
reply(`${e}`)
}
})
