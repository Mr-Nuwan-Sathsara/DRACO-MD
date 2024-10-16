const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')
const { botwatermark } = require('../botwatermark')

cmd({
    reply_pattern: "1",
    quoted_includes: "yt downloader",
    pattern: "yt",
    dontAddReplyList: true,
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

    reply(urls[0]+'\n'+botwatermark)

}catch(e){
console.log(e)
reply(`${e}`)
}
})

