const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const cheerio = require('cheerio')
const axios = require('axios')

cmd({
    pattern: "gituser",
    desc: "Get information about any github user.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const url = `https://github.com/${q}/`
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const noresult = $("body > div.logged-out.env-production.page-responsive.min-height-full.d-flex.flex-column > div.application-main.d-flex.flex-auto.flex-column > main > div.position-relative > div.position-relative.d-block.my-0.mx-auto.overflow-hidden > img:nth-child(1)").attr('src')

   if(!q){
        await m.react("❌")
        return reply("*❗️ Give github username find informations. ❗️*")
    }else if(noresult) {
        await m.react("❌")
        return reply("*❗️ Can't find this user!. ❗️*")
    }
    await m.react("🎬")

  const img = $("body > div.logged-in.env-production.page-responsive.page-profile > div.application-main > main > div > div > div.Layout-sidebar > div > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img").attr('src')
  const name = $("body > div.logged-in.env-production.page-responsive.page-profile > div.application-main > main > div > div > div.Layout-sidebar > div > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-name.vcard-fullname.d-block.overflow-hidden").text().trim()
  const username = $("body > div.logged-in.env-production.page-responsive.page-profile > div.application-main > main > div > div > div.Layout-sidebar > div > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block").text().trim()
  const followers = $("body > div.logged-in.env-production.page-responsive.page-profile > div.application-main > main > div > div > div.Layout-sidebar > div > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span").text()
  const url = `https://github.com/${q}/`
  const prepos = $("#repositories-tab > span.Counter").text()

    console.log(img)
    console.log(name)
    console.log(username)
    console.log(followers)
    console.log(url)
    console.log(prepos)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
