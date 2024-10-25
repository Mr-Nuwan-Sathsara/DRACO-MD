const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "movie",
    alias: ["mv"],
    desc: "Download movies from sinhalasub.lk.",
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
        return reply("*❗️ Movie not found! ❗️*")
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

let movielist = `*1. ${mvdata[0].title}*`
if(mvdata[1]) movielist += `\n\n*2. ${mvdata[1].title}*`
if(mvdata[2]) movielist += `\n\n*3. ${mvdata[2].title}*`
if(mvdata[3]) movielist += `\n\n*4. ${mvdata[3].title}*`
if(mvdata[4]) movielist += `\n\n*5. ${mvdata[4].title}*`
if(mvdata[5]) movielist += `\n\n*6. ${mvdata[5].title}*`
if(mvdata[6]) movielist += `\n\n*7. ${mvdata[6].title}*`
if(mvdata[7]) movielist += `\n\n*8. ${mvdata[7].title}*`
if(mvdata[8]) movielist += `\n\n*9. ${mvdata[8].title}*`
    
let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*🗃️ Database :* Sinhalasub.lk
*🔎 Search :* ${q}

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
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("1. ")
const cr2 = omsg.includes("2.")
if(cmv == -1) return
const sq1 = omsg.split("*1. ")[1]
const sq2 = sq1.split("*2.")[0]
let sq3 = sq2.replaceAll("*","")
if(cr2 === false) sq3 = sq1.split("*" + botwatermark)[0]
const url = `https://sinhalasub.lk/?s=${sq3}`
    console.log(cr2)
    console.log(url)
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("2. ")
if(cmv == -1) return
const sq1 = omsg.split("*2. ")[1]
const sq2 = sq1.split("*3.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "3",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("3. ")
if(cmv == -1) return
const sq1 = omsg.split("*3. ")[1]
const sq2 = sq1.split("*4.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "4",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("4. ")
if(cmv == -1) return
const sq1 = omsg.split("*4. ")[1]
const sq2 = sq1.split("*5.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "5",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("5. ")
if(cmv == -1) return
const sq1 = omsg.split("*5. ")[1]
const sq2 = sq1.split("*6.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "6",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("6. ")
if(cmv == -1) return
const sq1 = omsg.split("*6. ")[1]
const sq2 = sq1.split("*7.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "7",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("7. ")
if(cmv == -1) return
const sq1 = omsg.split("*7. ")[1]
const sq2 = sq1.split("*8.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "8",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("8. ")
if(cmv == -1) return
const sq1 = omsg.split("*8. ")[1]
const sq2 = sq1.split("*9.")[0]
const sq3 = sq2.replaceAll("*","")
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "9",
    quoted_includes: "*🗃️ Database :* Sinhalasub.lk",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

const omsg = m.quoted.imageMessage.caption
const cmv = omsg.search("9. ")
if(cmv == -1) return
const sq1 = omsg.split("*9. ")[1]
const sq2 = sq1.split(botwatermark)[0]
const url = `https://sinhalasub.lk/?s=${sq3}`
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

await m.react("🎬")

const url2 = mvdata[0].link
const response2 = await axios.get(url2)
const $$ = cheerio.load(response2.data)
const quality1 = $$("tr:nth-child(1) > td:nth-child(2) > strong").text().trim()
    let mquality1;
    if(quality1) mquality1 = quality1.split(" ")[1]
    let maquality1;
    if(quality1) maquality1 = mquality1.replace("p","p ")
const quality2 = $$("tr:nth-child(2) > td:nth-child(2) > strong").text().trim()
    let mquality2;
    if(quality2) mquality2 = quality2.split(" ")[1]
    let maquality2;
    if(quality2) maquality2 = mquality2.replace("p","p ")
const quality3 = $$("tr:nth-child(3) > td:nth-child(2) > strong").text().trim()
    let mquality3;
    if(quality3) mquality3 = quality3.split(" ")[1]
    let maquality3;
    if(quality3) maquality3 = mquality3.replace("p","p ")
const quality4 = $$("tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    let mquality4;
    if(quality4) mquality4 = quality4.split(" ")[1]
    let maquality4;
    if(quality4) maquality4 = mquality4.replace("p","p ")
const ms1080 = $$("tr:nth-child(1) > td:nth-child(3)").text()
const ms21080 = ms1080.split(" ")[0]
const ms31080 = ms1080.search("MB")
const ms720 = $$("tr:nth-child(2) > td:nth-child(3)").text()
const ms2720 = ms720.split(" ")[0]
const ms3720 = ms720.search("MB")
const ms480 = $$("tr:nth-child(3) > td:nth-child(3)").text()
const ms2480 = ms480.split(" ")[0]
const ms3480 = ms480.search("MB")
const ms360 = $$("tr:nth-child(4) > td:nth-child(3)").text()
const ms2360 = ms360.split(" ")[0]
const ms3360 = ms360.search("MB")
const img = $$("#single > div.content.right > div.sheader > div.poster > img").attr('src')

let gbormb1080 = `MB`
let gbormb720 = `MB`
let gbormb480 = `MB`
let gbormb360 = `MB`

if(ms31080 == -1) gbormb1080 = `GB`
if(ms3720 == -1) gbormb720 = `GB`
if(ms3480 == -1) gbormb480 = `GB`
if(ms3360 == -1) gbormb360 = `GB`

let aqualitys = ``
    if(ms1080) aqualitys += `*2⃣ - ${maquality1}(${ms21080}${gbormb1080})*`
    if(ms720) aqualitys += `\n*3️⃣ - ${maquality2}(${ms2720}${gbormb720})*`
    if(ms480) aqualitys += `\n*4️⃣ - ${maquality3}(${ms2480}${gbormb480})*`
    if(ms360) aqualitys += `\n*5️⃣ - ${maquality4}(${ms2360}${gbormb360})*`

let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*📝 Title :* ${mvdata[0].title}
*⭐️ Rating :* ${mvdata[0].rating}
*📆 Year :* ${mvdata[0].year}
*🔗 Url :* ${mvdata[0].link}

*🎬 Movie Informations 🎬*
*1️⃣ - Movie Informations*

*📥 Available Qualitys 📥*

${aqualitys}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "Available Qualitys",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

    const omsg = m.quoted.imageMessage.caption
    const cq = omsg.search("1️⃣")
    if(cq == -1) return
    const url = urls[0]
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const img = $("#single > div.content.right > div.sheader > div.poster > img").attr('src')
    const title = $("#single > div.content.right > div.sheader > div.data > div.head > h1").text()
    const desc = $("#single > div.content.right > div.sheader > div.data > div.extra > span.tagline").text()
    const rdate = $("#single > div.content.right > div.sheader > div.data > div.extra > span.date").text()
    const country = $("#single > div.content.right > div.sheader > div.data > div.extra > span.country").text()
    const duration = $("#single > div.content.right > div.sheader > div.data > div.extra > span.runtime").text()
    const imdb = $("#repimdb > strong").text().trim()
    const tmdb = $("#info > div:nth-child(5) > span > strong").text().trim()
    const cjid = q.search("@g.us")
    if(q) {
        const groups = await conn.groupFetchAllParticipating();
        const groupJids = Object.keys(groups)
        const sjids = `${groupJids}`
        const cpoq = sjids.search(q)
        if(cjid == -1) {
            await m.react("❌")
            return reply("*❗️ Invalid Group Jid. ❗️*")
        }
        if(cpoq == -1) {
            await m.react("❌")
            return reply("*❗️ First join the group. ❗️*")
        }
        await m.react("🔄")
let mvinfo = `*📝 Title :* ${title}
*🗓️Description :* ${desc}
*⏰ Duration :* ${duration}
*📆 Relesed Date :* ${rdate}
*🌎 Country :* ${country}
*⭐️ Imdb :* ${imdb}
*⭐️ Tmdb :* ${tmdb}\n\n\n${botwatermark}`
        
await conn.sendMessage(q, {image: {url: img},caption: mvinfo},{quoted: mek})
        await m.react("✅")
    }else if(!q) {
    await m.react("🔄")
let mvinfo = `*📝 Title :* ${title}
*🗓️Description :* ${desc}
*⏰ Duration :* ${duration}
*📆 Relesed Date :* ${rdate}
*🌎 Country :* ${country}
*⭐️ Imdb :* ${imdb}
*⭐️ Tmdb :* ${tmdb}\n\n\n${botwatermark}`
        
await conn.sendMessage(from, {image: {url: img},caption: mvinfo},{quoted: mek})
    await m.react("✅")
    }
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "Available Qualitys",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

    const omsg = m.quoted.imageMessage.caption
    const cq = omsg.search("2️⃣")
    if(cq == -1) return
    const url = urls[0]
    const cjid = q.search("@g.us")
    if(q) {
        const groups = await conn.groupFetchAllParticipating();
        const groupJids = Object.keys(groups)
        const sjids = `${groupJids}`
        const cpoq = sjids.search(q)
        if(cpoq == -1) {
            await m.react("❌")
            return reply("*❗️ First join the group. ❗️*")
        }
        if(cjid == -1) {
            await m.react("❌")
            return reply("*❗️ Invalid Group Jid. ❗️*")
        }
        await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p1080 = $("tr:nth-child(1) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p1080)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("1⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("2️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    }
    }else if(!q) {
    await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p1080 = $("tr:nth-child(1) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p1080)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("2️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("2️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    }
    }
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "3",
    quoted_includes: "Available Qualitys",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

    const omsg = m.quoted.imageMessage.caption
    const cq = omsg.search("3️⃣")
    if(cq == -1) return
    const url = urls[0]
    const cjid = q.search("@g.us")
    if(q) {
        const groups = await conn.groupFetchAllParticipating();
        const groupJids = Object.keys(groups)
        const sjids = `${groupJids}`
        const cpoq = sjids.search(q)
        if(cpoq == -1) {
            await m.react("❌")
            return reply("*❗️ First join the group. ❗️*")
        }
        if(cjid == -1) {
            await m.react("❌")
            return reply("*❗️ Invalid Group Jid. ❗️*")
        }
        await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p720 = $("tr:nth-child(2) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p720)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("3️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("3️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    }
    }else if(!q) {
    await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p720 = $("tr:nth-child(2) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p720)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("3️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("3️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    }
    }

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "4",
    quoted_includes: "Available Qualitys",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

    const omsg = m.quoted.imageMessage.caption
    const cq = omsg.search("4️⃣")
    if(cq == -1) return
    const url = urls[0]
    const cjid = q.search("@g.us")
    if(q) {
        const groups = await conn.groupFetchAllParticipating();
        const groupJids = Object.keys(groups)
        const sjids = `${groupJids}`
        const cpoq = sjids.search(q)
        if(cpoq == -1) {
            await m.react("❌")
            return reply("*❗️ First join the group. ❗️*")
        }
        if(cjid == -1) {
            await m.react("❌")
            return reply("*❗️ Invalid Group Jid. ❗️*")
        }
        await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p480 = $("tr:nth-child(3) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p480)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("4️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("4️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    }
    }else if(!q) {
    await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p480 = $("tr:nth-child(3) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p480)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("4️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("4️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    }
    }

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "5",
    quoted_includes: "Available Qualitys",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

    const omsg = m.quoted.imageMessage.caption
    const cq = omsg.search("5️⃣")
    if(cq == -1) return
    const url = urls[0]
    const cjid = q.search("@g.us")
    if(q) {
        const groups = await conn.groupFetchAllParticipating();
        const groupJids = Object.keys(groups)
        const sjids = `${groupJids}`
        const cpoq = sjids.search(q)
        if(cpoq == -1) {
            await m.react("❌")
            return reply("*❗️ First join the group. ❗️*")
        }
        if(cjid == -1) {
            await m.react("❌")
            return reply("*❗️ Invalid Group Jid. ❗️*")
        }
        await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p360 = $("tr:nth-child(4) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p360)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("5️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("5️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(q, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"})
    await m.react("✅")
    }
    }else if(!q) {
    await m.react("🔄")
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const p360 = $("tr:nth-child(4) > td:nth-child(1) > a").attr('href')
    const response2 = await axios.get(p360)
    const $$ = cheerio.load(response2.data)
    const url1 = $$("#link").attr('href')
    if(url1.startsWith("https://pixeldrain.com")) {
    const url2 = url1.split("u/")[1]
    const dlurl = `https://pixeldrain.com/api/file/${url2}`
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("5️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: dlurl},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    } else {
    const makefilename = omsg.split("*📝 Title :* ")[1]
    const filename = makefilename.split("*⭐️ Rating :*")[0]
    const makequality = omsg.split("5️⃣")[1]
    const mvquality = makequality.split("(")[0]
    let desc = `*Name :* ${filename} | ${mvquality}\n\n${botwatermark}`
    await conn.sendMessage(from, {document: {url: url1},mimetype: "video/mp4",caption: desc,fileName: "[🐲 D.M.W.B 🐲]" + filename + ".mp4"},{quoted: mek})
    await m.react("✅")
    }
    }
    

}catch(e){
console.log(e)
reply(`${e}`)
}
})
