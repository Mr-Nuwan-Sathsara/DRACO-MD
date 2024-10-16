const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

cmd({
    pattern: "hirunews",
    desc: "Get news from hirunews.",
    category: "news",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await m.react("🔄")
    const scrape1 = await fetch(`https://www.hirunews.lk/local-news.php?pageID=1`)
    const $ = cheerio.load(await scrape1.text())
    const newsurl = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.middle > div.all-section-tittle > a:nth-child(2)").attr('href')
    const newstitle = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.middle > div.all-section-tittle > a:nth-child(2)").text().trim()
    const newsdate = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.middle > div.middle-tittle-time").text().trim()
    const newsimg = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.left > div > a > img").attr('src')
    
    const scrape2 = await fetch(newsurl)
    const $$ = cheerio.load(await scrape2.text())
    const news = $$("#article-phara2").text().trim()

let desc = `
*Title :* ${newstitle}
*Date :* ${newsdate}
    
*News :* ${news}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: newsimg},caption: desc},{quoted: mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "newsfirst",
    desc: "Get news from NewsFirst.",
    category: "news",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await m.react("🔄")
    const scrape = await fetch ('https://sinhala.newsfirst.lk/latest-news');

    const $g = cheerio.load(await scrape.text());
    const title = $g ("body > app-root > app-latest > div > div.padding > div:nth-child(2) > div:nth-child(1) > div > div > div.ng-star-inserted > div > div > a > h1").text().trim()
    const news = $g("body > app-root > app-latest > div > div.padding > div:nth-child(2) > div:nth-child(1) > div > div > div.ng-star-inserted > div > div > a > div:nth-child(3) > p").text().trim()
    const img =$g("body > app-root > app-latest > div > div.padding > div:nth-child(2) > div:nth-child(1) > div > div > div.ng-star-inserted > div > div > a > div.local_img_div > img").attr('src')

    const scrape2 = await fetch(`https://sinhala.newsfirst.lk/home`)
    const $ = cheerio.load(await scrape2.text())
    const newsdate = $("body > app-root > app-home > div > div.padding > div:nth-child(4) > div:nth-child(1) > div > div.main_div > div > div:nth-child(1) > a > div.time_readMore > div:nth-child(1) > div").text().trim()
    
let desc = `
*Title :* ${title}
*Date :* ${newsdate}
    
*News :* ${news}\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: img},caption: desc},{quoted: mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
