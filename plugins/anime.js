const axios = require('axios');
const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "animeshort",
    desc: "Fetch random anime short video.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")

const apiUrl = `https://widipe.com/download/storyanime`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{video: {url: data.result.url},mimetype: "video/mp4",caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "agirl",
    desc: "Fetch random anime girl image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/waifu`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "aneko",
    desc: "Fetch random neko image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/neko`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ashinobu",
    desc: "Fetch random shinobu image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/shinobu`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "amegumin",
    desc: "Fetch random megumin image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/megumin`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "abully",
    desc: "Fetch random bully image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/bully`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "acuddle",
    desc: "Fetch random cuddle image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/cuddle`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "acry",
    desc: "Fetch random cry image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/cry`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ahug",
    desc: "Fetch random hug image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/hug`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "aawoo",
    desc: "Fetch random awoo image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/awoo`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "akiss",
    desc: "Fetch random kiss image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/kiss`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "alick",
    desc: "Fetch random lick image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/lick`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "apat",
    desc: "Fetch random pat image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/pat`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "asmug",
    desc: "Fetch random smug image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/smug`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "abonk",
    desc: "Fetch random bonk image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/bonk`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ayeet",
    desc: "Fetch random yeet image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/yeet`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ablush",
    desc: "Fetch random blush image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/blush`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "asmile",
    desc: "Fetch random smile image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/smile`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "awave",
    desc: "Fetch random wave image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/wave`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ahighfive",
    desc: "Fetch random highfive image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/highfive`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ahandhold",
    desc: "Fetch random handhold image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/handhold`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "anom",
    desc: "Fetch random nom image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/nom`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "abite",
    desc: "Fetch random bite image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/bite`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "aglomp",
    desc: "Fetch random glomp image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/glomp`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "aslap",
    desc: "Fetch random slap image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/slap`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "akill",
    desc: "Fetch random kill image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/kill`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "akick",
    desc: "Fetch random kick image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/kick`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ahappy",
    desc: "Fetch random happy image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/happy`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "awink",
    desc: "Fetch random wink image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/wink`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "apoke",
    desc: "Fetch random poke image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/poke`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "adance",
    desc: "Fetch random dance image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/dance`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "acringe",
    desc: "Fetch random cringe image.",
    category: "anime",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🍄")


const apiUrl = `https://api.waifu.pics/sfw/cringe`
const response = await axios.get(apiUrl)
const data = response.data

await conn.sendMessage(from,{image: {url: data.url},caption: botwatermark},{quoted: mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
