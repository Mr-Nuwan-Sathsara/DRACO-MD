const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "subdown1",
    desc: "Download movies sinhala subtitles from pirate.lk.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = `https://pirate.lk/?s=${q}`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const noresult = $("#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2").text()

   if(!q){
        await m.react("❌")
        return reply("*❗️ Give movie name to download subtitle. ❗️*")
    }else if(noresult == `No results to show with ${q}`) {
        await m.react("❌")
        return reply("*❗️ Subtitle not found!. ❗️*")
    }
    await m.react("🎬")
    const url2 = $("#contenedor > div.module > div.content.rigth.csearch > div.search-page > div:nth-child(2) > article > div.details > div.title > a").attr('href')
    const response2 = await axios.get(url2)
    const $$ = cheerio.load(response2.data)
    const subpageid = $$("#download > div > div > table > tbody > tr:nth-child(1)").attr('id')
    const subpage = $$(`#${subpageid} > td:nth-child(1) > a`).attr('href')

    const response3 = await axios.get(subpage)
    const $$$ = cheerio.load(response3.data)
    const subname = $$$("body > div > div > div > div.inside > small:nth-child(4) > a").text().trim()
    const sublink = $$$("#link").attr('href')

    await conn.sendMessage(from, {document: {url: sublink},fileName: subname + ".zip",caption: botwatermark},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "subdown2",
    desc: "Download movies sinhala subtitles from baiscope.lk.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = `https://www.baiscope.lk/?s=${q}`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const noresult = $("body > div.elementor.elementor-234293.elementor-location-archive > section.elementor-section.elementor-top-section.elementor-element.elementor-element-70cfc451.elementor-section-full_width.elementor-section-stretched.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-1c0cc75 > div").text().trim()
console.log(noresult)
   if(!q){
        await m.react("❌")
        return reply("*❗️ Give movie name to download subtitle. ❗️*")
    }else if(noresult == `No results to show with ${q}`) {
        await m.react("❌")
        return reply("*❗️ Subtitle not found!. ❗️*")
    }
    await m.react("🎬")
    const url2 = $("body > div.elementor.elementor-234293.elementor-location-archive > section.elementor-section.elementor-top-section.elementor-element.elementor-element-70cfc451.elementor-section-full_width.elementor-section-stretched.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-1c0cc75 > div > div > div > div.elementor-posts-container.elementor-posts.elementor-posts--skin-cards.elementor-grid.elementor-has-item-ratio > article.elementor-post.elementor-grid-item.post-231332.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-18-plus.category-all.category-box-office-hits.category-coming-of-age.category-featured-articles.category-maxxa-1.category-sinhala-subtitle.category-crime.category-mystery.category-strange.category-ela.category-action.category-movies.category-thriller.category-drama.category-must-watch.category-war.category-adventure.category-shan-vimukthi.category-sinhala-subtitles.tag-cailee-spaeny.tag-kirsten-dunst.tag-sinhala-sub.tag-sinhala-subs.tag-sinhala-subtitle.tag-sinhala-subtitles.tag-sonoya-mizuno.tag-stephen-mckinley-henderson.tag-subs.tag-subtitle-2.tag-subtitles.tag-wagner-moura.tag-2160.tag-10630.tag-10695.tag-2135.tag-7575.tag-2134.tag-2196.tag-2133.tag-2159 > div > div > h5 > a").attr('href')
    const response2 = await axios.get(url2)
    const $$ = cheerio.load(response2.data)
    const subpageid = $$("#cm-primary > div.cm-posts.clearfix > article:nth-child(1)").attr('id')
    console.log(subpageid)
    /*const subpage = $$(`#${subpageid} > td:nth-child(1) > a`).attr('href')
    const subname = $$$("body > div > div > div > div.inside > small:nth-child(4) > a").text().trim()
    const sublink = $$$("#link").attr('href')

    await conn.sendMessage(from, {document: {url: sublink},fileName: subname + ".zip",caption: botwatermark},{quoted: mek})
*/
}catch(e){
console.log(e)
reply(`${e}`)
}
})

