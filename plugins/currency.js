const axios = require('axios');
const config = require('../config'); // Make sure to add your API key here
const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "currency",
    desc: "Convert an amount from one currency to another.",
    category: "convert",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        await m.react("💸")
        
        if (args.length < 3) {
            return reply("Usage: .convert <amount> <from_currency> <to_currency>");
        }

        const amount = args[0];
        const fromCurrency = args[1].toUpperCase();
        const toCurrency = args[2].toUpperCase();

        if (isNaN(amount)) {
            return reply("Please provide an ammount.");
        }

        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.rates[toCurrency]) {
            return reply(`Conversion rate for ${toCurrency} not found.`);
        }

        const convertedAmount = (amount * data.rates[toCurrency]).toFixed(2);
let conversionInfo = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗖𝗨𝗥𝗥𝗘𝗡𝗖𝗬 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗢𝗡 🐲 」*

 *💸 Aᴍᴏᴜɴᴛ*: ${amount} ${fromCurrency}
 *💵 Cᴏɴᴠᴇʀᴛᴇᴅ Aᴍᴏᴜɴᴛ*: ${convertedAmount} ${toCurrency}
 *⭐ Exᴄʜᴀɴɢᴇ Rᴀᴛᴇ*: 1 ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}\n\n\n${botwatermark}`
            
        await conn.sendMessage(from, { text: conversionInfo }, { quoted: mek });
    }catch(e){
console.log(e)
reply(`${e}`)
}
})
