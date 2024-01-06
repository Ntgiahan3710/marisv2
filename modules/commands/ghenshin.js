module.exports.config = {
  name: "ghenshin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki", //mod by teri
  description: "romdom ảnh về nhân vật game ghenshin",
  commandCategory: "Dành cho người dùng",
  usages: "image",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(`🖼️Danh sách các ảnh hiện có\n👉 baal\n👉 yunjin\n👉 Yae\n👉 mona\n👉 yoimiya\n👉 hutao\n👉 ganyu\nDùng prefix <dấu lệnh> + tên  < ảnh bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "mona") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://mona.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `mona nè <3\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
  }
    if (args[0] == "hutao") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://hutao.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Hutao nè <3\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
  }
  if (args[0] == "ganyu") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://ganyu.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Ảnh Ganyu cho bạn đây\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
  }
  if (args[0] == "yoimiya") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://yoimiya.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `yoimiya nè <3\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
  }
  if (args[0] == "Yae") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://Guuji-Yae.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Guuji Yae nè <3\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
  }
  if (args[0] == "yunjin") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://Yunjin.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Yunjin nè <3\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
  }
  if (args[0] == "baal") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 100) {
  axios.get('https://Raiden-Shogun.feedheavens.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Raiden shotgun nè <3\n-100 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 100})
      })
  } else return api.sendMessage("Bạn cần 100 đô",event.threadID,event.messageID);
    }
  }
