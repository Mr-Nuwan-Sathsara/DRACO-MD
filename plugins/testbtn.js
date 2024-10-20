const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
let needus = "*Please give me a x url!*" 

//==========================================for button users==============================================

cmd({
    pattern: "btn",    
    desc: "Download tiktok videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const mov = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/twitter?url=${q}`)
    
let mala = `乂 *X - D O W N L O A D E R*

    *◦ Title:* Title ekah
`
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: `D TEXT`,
                        url: `https://wa.me/94742737742`,
                        merchant_url: `https://google.com/`
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: 'FACT GET',
                     // description: `X`,
                     id: `.fact`
                  }, {
                     title: 'ALIVE GET',
                     // description: `X`,
                     id: `.alive`
                  }, {
                     title: 'PING CHECK',
                     // description: `X`,
                     id: `.ping`
		  }]
               }]
            })
         }]
	

        let message = {
            image: `https://static.vecteezy.com/system/resources/thumbnails/025/463/773/small/hacker-logo-design-a-mysterious-and-dangerous-hacker-illustration-vector.jpg`,
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
