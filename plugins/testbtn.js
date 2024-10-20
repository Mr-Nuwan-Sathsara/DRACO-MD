const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
let needus = "Please give me a x url!" 

//==========================================for button users==============================================

cmd({
    pattern: "twi",    
    desc: "Download tiktok videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    
let mala = `乂 X - D O W N L O A D E R

    ◦ Title: HI Lamai
`
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "HI DISPLAY TEXT",
                        url: `https://wa.me/94742737742`,
                        merchant_url: `https://google.com/`
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: 'PING',
                     // description: X,
                     id: `.ping`
                  }, {
                     title: 'FACT',
                     // description: X,
                     id: `.fact`
                  }, {
                     title: 'CAT',
                     // description: X,
                     id: `.cat`
		  }]
               }]
            })
         }]
	

        let message = {
            image: mov.result.thumb,
            header: '',
            footer: `Footer ekah`,
            body: mala
        }   
return conn.sendButtonMessage(from, buttons, m, message) 

} catch (e) {
console.log(e)
reply(`${e}`)
}
})
