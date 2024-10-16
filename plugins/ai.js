const {cmd , commands} = require('../command')
const axios = require('axios')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "imagine",
    desc: "Generate images using Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const fsize = q.split("/")[1]
const prompt = q.replace("/" + fsize,"")

    let width = ""
    let height = ""
    
    if(fsize == "full") width = "620"
    if(fsize == "full") height = "960"
    if(fsize == "logo") height = "1024"
    if(fsize == "logo") width = "1024"
    if(fsize == "cinema") height = "720"
    if(fsize == "cinema") width = "1280"

    const sflash = q.search("/")
    if(!q || !fsize || !prompt || sflash == -1) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ Tᴏ Gᴇɴᴇʀᴀᴛᴇ Iᴍᴀɢᴇ ❗*")
}

if(width == "" || height == "") {
    await m.react("❌")
    return reply("test done")
}
await m.react("🖼️")
let aiimg = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=42&nologo=True`
await conn.sendMessage(from,{image: {url: aiimg},caption: botwatermark},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ai",
    desc: "Chat with Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "coplit",
    desc: "Chat with Coplit CodeMirror Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}
await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/codemirror?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "gemini",
    desc: "Chat with Gemini Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/gemini?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.response+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "gpt1",
    desc: "Chat with ChatGpt4-V1.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/gpt4?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "gpt2",
    desc: "Chat with ChatGpt4-V2.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/gpt4-v2?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "chatgpt",
    desc: "Chat with Gpt-4.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/gpt?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "lalaland",
    desc: "Chat with Lalaland Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/lalaland?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "lamda",
    desc: "Chat with Lamda Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴇxᴛ ❗*")
}

await m.react("🤖")

const apiUrl = `https://api.vihangayt.com/ai/lamda?q=${q}`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{text: data.data+`\n\n\n${botwatermark}`},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
