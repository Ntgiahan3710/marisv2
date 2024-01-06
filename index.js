const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require('express');
const path = require('path');
const chalk = require('chalkercli');
const chalk1 = require('chalk');
const CFonts = require('cfonts');
const app = express();
const port = process.env.PORT || 2006;
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'




console.log('ㅤㅤㅤㅤ            𝐻𝑜̂𝑚 𝑛𝑎𝑦 𝑙𝑎̀:' +  thu,'𝐶ℎ𝑢́𝑐 𝑏𝑎̣𝑛 𝑐𝑜́ 𝑚𝑜̣̂𝑡 𝑛𝑔𝑎̀𝑦 𝑣𝑢𝑖 𝑣𝑒̉\n' )



app.get('/', function(req, res) {
  
    res.sendFile(path.join(__dirname, '/index.html'));
  
});


app.listen(port);
console.log('𝑀𝑎́𝑦 𝑐ℎ𝑢̉ 𝑏𝑎̆́𝑡 đ𝑎̂̀𝑢 𝑡𝑎̣𝑖 http://localhost:' + port,"𝑉𝑎̀𝑜 𝑙𝑢́𝑐:" + gio,"\n\n");


logger("𝙷𝙴̣̂ 𝚃𝙷𝙾̂́𝙽𝙶 𝙱𝙾𝚃 𝙼𝚊𝚛𝚒𝚜𝚟𝟸 Đ𝚄̛𝙾̛̣𝙲  𝚁𝙴𝙼𝙰𝙺𝙴 𝚃𝚄̛̀ 𝙼𝙸𝚁𝙰𝙸𝚅𝟸 𝙳𝙾 n𝚝𝚞𝚊𝚗 𝙳𝚄𝚈 𝚃𝚁𝙸̀ 𝚅𝙰̀ 𝙿𝙷𝙰́𝚃 𝚃𝚁𝙸𝙴̂̉𝙽", "🛠 𝚅𝙽");
logger("𝙼𝚊𝚛𝚒𝚜𝚟𝟸 𝙱𝙾𝚃 𝚂𝚈𝚂𝚃𝙴𝙼 𝙸𝚂 𝚁𝙴𝙼𝙰𝙺𝙴𝙳 𝙵𝚁𝙾𝙼 𝙼𝙸𝚁𝙰𝙸𝚅𝟸 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝙳 𝙰𝙽𝙳 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝙳 𝙱𝚈 n𝚝𝚞𝚊𝚗", "🛠 𝙴𝙽");
logger("𝙻𝚒𝚎̂𝚗 𝚑𝚎̣̂ 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔: https://www.facebook.com/TuanKaiDu1m2", "𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔");
logger("donate: 22223815042007 / MB BANK", "𝙲𝚘𝚗𝚝𝚊𝚌𝚝");


const rainbow = chalk.rainbow(`\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ『=== 𝐌𝐚𝐫𝐢𝐬𝐯𝟐  ===』\n`).stop();
rainbow.render();
const frame = rainbow.frame(); 
console.log(frame);
logger("𝙱𝙾𝚃 𝙼𝚊𝚛𝚒𝚜 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳", "𝙱𝙾𝚃 𝙼𝚊𝚛𝚒𝚜");
logger("𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕓𝕒𝕔𝕜 𝕥𝕠 𝔹𝕠𝕥 𝕄𝕒𝕣𝕚𝕤", "𝙱𝙾𝚃 𝙼𝚊𝚛𝚒𝚜");
logger("𝔹𝕆𝕋 𝕄𝕒𝕣𝕚𝕤 ℙℝ𝕆𝕁𝔼ℂ𝕋 𝕤𝕥𝕒𝕣𝕥 𝕣𝕦𝕟𝕟𝕚𝕟𝕘...", "𝙱𝙾𝚃 𝙼𝚊𝚛𝚒𝚜");
logger("ℂ𝕙𝕖𝕔𝕜𝕚𝕟𝕘 𝕥𝕙𝕖 𝕧𝕖𝕣𝕤𝕚𝕠𝕟...", "UPDATE");
logger("𝕐𝕠𝕦𝕣 𝕧𝕖𝕣𝕤𝕚𝕠𝕟 𝕚𝕤 𝕥𝕙𝕖 𝕝𝕒𝕥𝕖𝕤𝕥!", "UPDATE");


function startBot(message) {
    (message) ? logger(message, "BOT STARTING") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "maris.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

   child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
axios.get("https://raw.githubusercontent.com/tandung1/Bot12/main/package.json").then((res) => {
    logger(res['data']['name'], "[ NGƯỜI LÀM FILE ]");
    logger("Version: " + res['data']['version'], "[ PHIÊN BẢN ]");
    logger(res['data']['description'], "[ LƯU Ý ]");
})
setTimeout(async function () {
CFonts.say('Maris v2', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})
CFonts.say(`Bot Messenger Created By ntuan`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
  CFonts.say('ntuan\n', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
  
  logger('𝙱𝚊̆́𝚝 đ𝚊̂̀𝚞 𝚕𝚘𝚊𝚍 𝚜𝚘𝚞𝚛𝚌𝚎 𝚌𝚘𝚍𝚎', 'LOAD')
  startBot()
}, 70)