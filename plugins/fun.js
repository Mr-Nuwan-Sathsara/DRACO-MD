const axios = require('axios');
const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "asupan",
    desc: "Fetch random asupan video.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🎬")
const api = `https://widipe.com/asupandouyin`
const response = await axios.get(api)
const data = response.data

await conn.sendMessage(from,{video: {url: data.url},caption: botwatermark},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "rgore",
    desc: "Fetch random gore video.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🗡")
const goreurl = `https://widipe.com/randomgore`
await conn.sendMessage(from,{video: {url: goreurl},caption: botwatermark},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "cat",
    desc: "Fetch a random cat image.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      await m.react("🐱")
      
        const apiUrl = `https://api.thecatapi.com/v1/images/search`;
        const response = await axios.get(apiUrl);
        const data = response.data[0];

        await conn.sendMessage(from, { image: { url: data.url }, caption: `${botwatermark}` }, { quoted: mek });
      
    }catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      await m.react("🐶")
      
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: `${botwatermark}` }, { quoted: mek });

    }catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "hackg",
    desc: "Group hack prank message.",
    category: "fun",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isOwner) return
if(!isGroup) return
await conn.sendMessage(from,{text:`*🔄 Hacking Group Using Jid...*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*🔄 Downloading Jid...*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*✅ Jid Downloaded*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*🪀 Hacking Group...*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*████░░░░░░░░░░░░ - 25%*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*████████░░░░░░░░ - 50%*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*████████████░░░░ - 75%*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*████████████████ - 100%*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*🔄 Removing Creator and Admins...*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*✅ Creator and Admins Removed*`});
await sleep(2000)

await conn.sendMessage(from,{text:`*✅ Group Hacked Success*`});
await sleep(5000)

await conn.sendMessage(from,{text:`*😂 This is prank. Okay? 🫣*`});
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "fakeage",
    desc: "Generate random age using name.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      await m.react("🔄")

        if(!q) return reply("Give me a name to generate fake age.")
        const apiUrl = `https://api.agify.io/?name=${q}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let msg = `*🤓 Rᴀɴᴅᴏᴍ Aɢᴇ Gᴇɴᴇʀᴀᴛᴏʀ 🤓*
*Nᴀᴍᴇ:${data.name}*
*Aɢᴇ:${data.age}*\n\n\n${botwatermark}`
      
        await conn.sendMessage(from,{text: msg},{quoted:mek})
        await m.react("✅")
    }catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "fact",
    desc: "Get a random fun fact",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        await m.react("🤓")
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const msg = `*🧠 Rᴀɴᴅᴏᴍ Fᴜɴ Fᴀᴄᴛ 🧠*

*${fact}*

*Isn't that interesting? 😄*\n\n\n${botwatermark}`;

        return reply(msg);
    }catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "quot",
    desc: "Generate quotes.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🔄")
const apiUrl = `https://api.quotable.io/random`
const response = await axios.get(apiUrl)
const data = response.data

let msg = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗤𝗨𝗢𝗧𝗘𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥 🐲 」*

${data.content}
_*-${data.author}-*_\n\n\n${botwatermark}`

await conn.sendMessage(from,{text:msg},{quoted:mek})
await m.react("✅")
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
