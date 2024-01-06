/*module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "JRT",
    description: "Console bớt nhàm chán hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console",
    cooldowns: 5
};

module.exports.handleEvent = async function ({
    api,
    event,
    args,
    Users,
    Threads
}) {
    const {
        configPath
    } = global.client;
    const {
        DeveloperMode
    } = global.config;
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    const modDev = config.DeveloperMode
     if ((this.config.credits) != "JRT") { return }
    if (modDev == true) return
    else {
   var chalk = require("chalk");
     const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
    var msg = event.body||"Ảnh, video hoặc ký tự đặc biệt";
    const threadInfo = await api.getThreadInfo(event.threadID)
    var threadName = threadInfo.threadName||"Tên đã bị gạch sổ";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor1 = Math.floor(Math.random()*12345678).toString(16);
    var randomColor2 = Math.floor(Math.random()*13245769).toString(16);
    var randomColor3 = Math.floor(Math.random()*13333333).toString(16);
    var randomColor4 = Math.floor(Math.random()*16777216).toString(16);
    var randomColor5 = Math.floor(Math.random()*14532484).toString(16); 
    const name = await Users.getNameUser(event.senderID)
    return console.log(chalk.bold.hex("#" + randomColor4)(`◆━━━━━━━━━[ 🦋 ] Toàn [ 🦋 ]━━━━━━━━━◆
`) + chalk.bold.hex("#" + randomColor)(`BOX: `) + chalk.hex("#" + randomColor1)(`${threadName}`) + chalk.bold.hex("#" + randomColor)( `\nNAME: `)  + chalk.hex("#" + randomColor2) (`${name}`) + chalk.bold.hex("#" + randomColor)(`\nMESSAGE: `) + chalk.hex("#" + randomColor3)(`${msg}`) + chalk.bold.hex("#" + randomColor) (`\nTIME: `) + chalk.bold.hex("#" + randomColor5) (`${thu} || ${gio}\n`)+ chalk.bold.hex("#" + randomColor4) (`◆━━━━━━━━━[ 🦋 ] Toàn [ 🦋 ]━━━━━━━━━◆
`));
}
}
module.exports.run = async ({
    api,
    event,
    args
}) => {
    if ((this.config.credits) != "Toàn") { return api.sendMessage(` Sao bạn lại sửa credit vậy!!! Sửa lại đi nhé 🥲`, event.threadID, event.messageID)}
    const {
        configPath
    } = global.client;
    const {
        DeveloperMode
    } = global.config;
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    const modDev = config.DeveloperMode

    if (modDev == true) {
        api.sendMessage(`→ DeveloperMode: ${modDev}\n→ Vui lòng chỉnh về false để sử dụng!!!`, event.threadID)
    } else
        return api.sendMessage(`→ DeveloperMode: ${modDev}\n→ Console đang chạy...`, event.threadID)
}*/
/*module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "JRT",
    description: "Làm cho console đẹp hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console ",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`Tên nhóm: ${nameBox}`) + " || " + chalk.hex("#" + random1)(`Tên người dùng: ${nameUser}`) + " || " + chalk.hex("#" + random2)(`Nội dung: ${msg}`) + `\n` + chalk.hex("#" + random3)(`[ ${time} ]`) + `\n` + chalk.white(`◆━━━━━━━━━━◆━━━━━━━━━◆𝑩𝑶𝑻◆━━━━━━━━◆━━━━━━━━━━◆\n`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {

}*/
module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "JRT",
    description: "Làm cho console đẹp hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console ",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "7900FF", "93FFD8", "CFFFDC", "FF5B00", "3B44F6", "A6D1E6", "7F5283", "A66CFF", "F05454", "FCF8E8", "94B49F", "47B5FF", "B8FFF9", "42C2FF", "FF7396"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
  var random4 = job[Math.floor(Math.random() * job.length)]
  var random5 = job[Math.floor(Math.random() * job.length)]
  var random6 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`[💓]→ 𝒕𝒆̂𝒏 𝒏𝒉𝒐́𝒎: ${nameBox}`) + `\n` + chalk.hex("#" + random5)(`[🔎]→ 𝒊𝒅 𝒃𝒐𝒙: ${event.threadID}`) + `\n` + chalk.hex("#" + random6)(`[👤]→ 𝒕𝒆̂𝒏 𝒏𝒈ườ𝒊 𝒅𝒖̀𝒏𝒈: ${nameUser}`) + `\n` + chalk.hex("#" + random1)(`[📝]→ 𝒊𝒅 𝒏𝒈ườ𝒊 𝒅𝒖̀𝒏𝒈: ${event.senderID}`) + `\n` + chalk.hex("#" + random2)(`[📩]→ 𝒏ộ𝒊 𝒅𝒖𝒏𝒈: ${msg}`) + `\n` + chalk.hex("#" + random3)(`[ ${time} ]`) + `\n` + chalk.hex("#" + random4)(`◆━━━━━━━━━◆𝒃𝒐𝒕 𝒄𝒉𝒂𝒕 𝒎𝒂𝒓𝒊𝒔◆━━━━━━━━◆\n`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {

}