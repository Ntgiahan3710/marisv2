module.exports = function ({ api, models, Users, Threads, Currencies }) {
  const fs = require("fs");
  const stringSimilarity = require('string-similarity'),
    escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    logger = require("../../utils/log.js");
  const axios = require('axios');
  const moment = require("moment-timezone");
  return async function ({ event }) {
    const dateNow = Date.now()
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss DD/MM/YYYY");
    const { allowInbox, PREFIX, ADMINBOT, NDH, DeveloperMode, adminOnly, keyAdminOnly, ndhOnly,adminPaseOnly } = global.config;
    const { userBanned, threadBanned, threadInfo, threadData, commandBanned } = global.data;
    const { commands, cooldowns } = global.client;
    var { body, senderID, threadID, messageID } = event;
    var senderID = String(senderID),
      threadID = String(threadID);
    const threadSetting = threadData.get(threadID) || {}
    const prefixRegex = new RegExp(`^(<@!?${senderID}>|${escapeRegex((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : PREFIX)})\\s*`);
    if (!prefixRegex.test(body)) return;
    const adminbot = require('./../../config.json');
    let getDay = moment.tz("Asia/Ho_Chi_Minh").day();
    let usgPath = __dirname + '/usages.json';
    if (!fs.existsSync(usgPath)) fs.writeFileSync(usgPath, JSON.stringify({}));
    let usages = JSON.parse(fs.readFileSync(usgPath));
    if (!(senderID in usages)) {
      usages[senderID] = {};
      usages[senderID].usages = 100;
      usages[senderID].diemdanh = 0; 
    };
    if(!global.data.allThreadID.includes(threadID) && !ADMINBOT.includes(senderID) && adminbot.adminPaseOnly == true) {
  return api.sendMessage("『 🌸 』 𝐌𝐈𝐑𝐀𝐈 『 🌸 』 - 𝐶ℎ𝑖̉ 𝐴𝐷𝑀𝐼𝑁𝐵𝑂𝑇 𝑚𝑜̛́𝑖 đ𝑢̛𝑜̛̣𝑐 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑏𝑜𝑡 𝑡𝑟𝑜𝑛𝑔 𝑐ℎ𝑎𝑡 𝑟𝑖𝑒̂𝑛𝑔.", threadID, messageID)
}    
    if (!ADMINBOT.includes(senderID) && adminbot.adminOnly == true) {
      if (!ADMINBOT.includes(senderID) && adminbot.adminOnly == true) return api.sendMessage('『 🌸 』 𝐌𝐈𝐑𝐀𝐈 『 🌸 』 - 𝐶ℎ𝑖̉ 𝐴𝐷𝑀𝐼𝑁𝐵𝑂𝑇 𝑚𝑜̛́𝑖 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑏𝑜𝑡', threadID, messageID)
    }
     if (!NDH.includes(senderID) && !ADMINBOT.includes(senderID) && adminbot.ndhOnly == true) { 
          return api.sendMessage('『 🌸 』 𝐌𝐈𝐑𝐀𝐈 『 🌸 』 - 𝐶ℎ𝑖̉ 𝑆𝑈𝑃𝑃𝑂𝑅𝑇𝐵𝑂𝑇 𝑚𝑜̛́𝑖 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑏𝑜𝑡.', threadID, messageID)

        }
const dataAdbox = require('./../../modules/commands/cache/data.json');
    var threadInf = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const findd = threadInf.adminIDs.find(el => el.id == senderID);
   if (dataAdbox.adminbox.hasOwnProperty(threadID) && dataAdbox.adminbox[threadID] == true && !ADMINBOT.includes(senderID) && !findd && event.isGroup == true && !NDH.includes(senderID) && !findd && event.isGroup == true) return api.sendMessage('『 🌸 』 𝐌𝐈𝐑𝐀𝐈 『 🌸 』 - 𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑘𝑖́𝑐ℎ ℎ𝑜𝑎̣𝑡 𝑐ℎ𝑒̂́ đ𝑜̣̂ 𝑄𝑢𝑎̉𝑛 𝑡𝑟𝑖̣ 𝑣𝑖𝑒̂𝑛, 𝑐ℎ𝑖̉ 𝑄𝑢𝑎̉𝑛 𝑡𝑟𝑖̣ 𝑣𝑖𝑒̂𝑛 đ𝑢̛𝑜̛̣𝑐 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝐵𝑜𝑡.', event.threadID, event.messageID)
    if (userBanned.has(senderID) || threadBanned.has(threadID) || allowInbox == ![] && senderID == threadID) {
      if (!ADMINBOT.includes(senderID.toString()) && !NDH.includes(senderID.toString())) {
        if (userBanned.has(senderID)) {
          const { reason, dateAdded } = userBanned.get(senderID) || {};
          return api.sendMessage(global.getText("handleCommand", "userBanned", reason, dateAdded), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
        } else {
          if (threadBanned.has(threadID)) {
            const { reason, dateAdded } = threadBanned.get(threadID) || {};
            return api.sendMessage(global.getText("handleCommand", "threadBanned", reason, dateAdded), threadID, async (err, info) => {
              await new Promise(resolve => setTimeout(resolve, 5 * 1000));
              return api.unsendMessage(info.messageID);
            }, messageID);
          }
        }
      }
    }
    const [matchedPrefix] = body.match(prefixRegex),
      args = body.slice(matchedPrefix.length).trim().split(/ +/);
    commandName = args.shift().toLowerCase();
    var command = commands.get(commandName);
    fs.writeFileSync(usgPath, JSON.stringify(usages, null, 4));
    if (!command) {
      var allCommandName = [];
      const commandValues = commands['keys']();
      for (const cmd of commandValues) allCommandName.push(cmd)
      const checker = stringSimilarity.findBestMatch(commandName, allCommandName);
      if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target);
      else return api.sendMessage(global.getText("handleCommand", "commandNotExist", checker.bestMatch.target), threadID);
    }
    if (commandBanned.get(threadID) || commandBanned.get(senderID)) {
      if (!ADMINBOT.includes(senderID)) {
        const banThreads = commandBanned.get(threadID) || [],
          banUsers = commandBanned.get(senderID) || [];
        if (banThreads.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandThreadBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000))
            return api.unsendMessage(info.messageID);
          }, messageID);
        if (banUsers.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandUserBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
      }
    }
    if (command.config.commandCategory.toLowerCase() == 'nsfw' && !global.data.threadAllowNSFW.includes(threadID) && !ADMINBOT.includes(senderID))
      return api.sendMessage(global.getText("handleCommand", "threadNotAllowNSFW"), threadID, async (err, info) => {

        await new Promise(resolve => setTimeout(resolve, 5 * 1000))
        return api.unsendMessage(info.messageID);
      }, messageID);
    var threadInfo2;
    if (event.isGroup == !![])
      try {
        threadInfo2 = (threadInfo.get(threadID) || await Threads.getInfo(threadID))
        if (Object.keys(threadInfo2).length == 0) throw new Error();
      } catch (err) {
        logger(global.getText("handleCommand", "cantGetInfoThread", "error"));
      }
       var permssion = 0;
    var threadInfoo = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const find = threadInfoo.adminIDs.find(el => el.id == senderID);
    if (ADMINBOT.includes(senderID.toString())) permssion = 3;
    else if (NDH.includes(senderID.toString())) permssion = 2;
    else if (!ADMINBOT.includes(senderID) && find) permssion = 1;
    var quyenhan = ""
    if (command.config.hasPermssion == 1 ){
      quyenhan = "Quản Trị Viên"
    } else if (command.config.hasPermssion == 2 ) {
      quyenhan = "SUPPORTBOT"
    } else if(command.config.hasPermssion == 3) {
      quyenhan = "ADMINBOT"
    }
    if (command.config.hasPermssion > permssion) return api.sendMessage(`『 🌸 』 𝐿𝑒̣̂𝑛ℎ ${command.config.name} 𝐶ℎ𝑖̉ Đ𝑢̛𝑜̛̣𝑐 𝐷𝑢̀𝑛𝑔 𝑉𝑜̛́𝑖 𝑁ℎ𝑢̛̃𝑛𝑔 𝑁𝑔𝑢̛𝑜̛̀𝑖 𝐶𝑜́ 𝑄𝑢𝑦𝑒̂̀𝑛 𝐻𝑎̣𝑛 𝐿𝑎̀ ${quyenhan}`, event.threadID, event.messageID);
       if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
        const timestamps = client.cooldowns.get(command.config.name);;
        const expirationTime = (command.config.cooldowns || 1) * 1000;
        if (timestamps.has(senderID) && dateNow < timestamps.get(senderID) + expirationTime) 
      return api.sendMessage(`⏱ Bạn đang trong thời gian chờ!\n Vui lòng thử lại sau ${((timestamps.get(senderID) + expirationTime - dateNow)/1000).toString().slice(0, 5)}s nữa nhé!!!`, threadID, messageID);

    var getText2;
    if (command.languages && typeof command.languages == 'object' && command.languages.hasOwnProperty(global.config.language))
      getText2 = (...values) => {
        var lang = command.languages[global.config.language][values[0]] || '';
        for (var i = values.length; i > 0x2533 + 0x1105 + -0x3638; i--) {
          const expReg = RegExp('%' + i, 'g');
          lang = lang.replace(expReg, values[i]);
        }
        return lang;
      };
     else getText2 = () => { };
    try {
      const Obj = {};
      Obj.api = api
      Obj.event = event
      Obj.args = args
      Obj.models = models
      Obj.Users = Users
      Obj.Threads = Threads
      Obj.Currencies = Currencies
      Obj.permssion = permssion
      Obj.getText = getText2
      usages = JSON.parse(fs.readFileSync(usgPath));
      fs.writeFileSync(usgPath, JSON.stringify(usages, null, 4));
      command.run(Obj);
      timestamps.set(senderID, dateNow);
      if (DeveloperMode == !![])
        logger(global.getText("handleCommand", "executeCommand", time, commandName, senderID, threadID, args.join(" "), (Date.now()) - dateNow), "MODE");
      return;
    } catch (e) {
      return api.sendMessage(global.getText("handleCommand", "commandError", commandName, e), threadID);
    }
  };
};
//usages.json