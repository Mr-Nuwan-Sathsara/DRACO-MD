const config = require('../config')
const { cmd, commands } = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        await m.react("📍")
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*🔄 Checking Draco-MD bot ping...*' }, {quoted:mek})
        const endTime = Date.now()
        const ping = endTime - startTime

        let pinspeed = `clownmdpingspeed`

        if(ping > 0) pinspeed = `*🚀 Your bot speed is very fast 🚀*`
        if(ping > 200) pinspeed = `*🛜 Your bot speed is fast 🛜*`
        if(ping > 500) pinspeed = `*❗ Your bot speed is slow ❗*`
        if(ping > 1000) pinspeed = `*🚫 Your bot speed is very slow 🚫*`

        await conn.sendMessage(from, { text: `*📍 Draco-MD bot ping: ${ping}ms*\n${pinspeed}` })
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
