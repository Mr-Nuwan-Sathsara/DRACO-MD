const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "sinhalasub",
    desc: "Download movies sinhala subtitles.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = `https://www.baiscope.lk/?s=${q}`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const noresult = $("body > div.elementor.elementor-234293.elementor-location-archive > section.elementor-section.elementor-top-section.elementor-element.elementor-element-70cfc451.elementor-section-full_width.elementor-section-stretched.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-1c0cc75 > div").text()

   if(!q){
        await m.react("❌")
        return reply("*❗️ Give movie name to download subtitle. ❗️*")
    }else if(noresult == `
							`) {
        await m.react("❌")
        return reply("*❗️ Result not found!. ❗️*")
    }

    const url2 = $("body > div.elementor.elementor-234293.elementor-location-archive > section.elementor-section.elementor-top-section.elementor-element.elementor-element-70cfc451.elementor-section-full_width.elementor-section-stretched.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-1c0cc75 > div > div > div > div > article.elementor-post.elementor-grid-item.post-115997.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-all.category-box-office-hits.category-featured-articles.category-sinhala-subtitle.category-crime.category-english.category-action.category-chamara-sampath.category-movies.category-thriller.category-you-decide.category-must-watch.category-sinhala-subtitles.tag-12659.tag-danny-huston.tag-frederick-schmidt.tag-gerard-butler.tag-morgan-freeman.tag-piper-perabo.tag-rocci-williams.tag-sinhala.tag-sinhala-subtitle.tag-10630.tag-2135.tag-2134.tag-2196 > div > div > h5 > a").attr('href')
    console.log(url2)
    const response2 = await axios.get(url2)
    const $$ = cheerio.load(response.data)
    const postnb = $$("#cm-primary > div.cm-posts.clearfix > article").attr('id')
	console.log(postnb)
    const sublink = $$(`#${postnb} > div > div.cm-entry-summary > a`).attr('href')
    console.log(sublink)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
