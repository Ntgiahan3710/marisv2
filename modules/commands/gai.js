module.exports.config = {
  name: "gai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Toan",
  description: "ramdom ảnh gái ",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const PREFIX = config.PREFIX
const timeStart = Date.now();
  const time = process.uptime();
		 var h = Math.floor(time / (60 * 60));
		var m = Math.floor((time % (60 * 60)) / 60);
	var s = Math.floor(time % 60);
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
var tl = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁","🥀" , "🧸" , "🥨" , "❤️‍🩹" , "🍇" , "🍑" , "🎀" , "🚬" , "🐧" , "🦅" , "🐸" , "🌻" , "🍁" , "🌷" , "🍀" , "💮" , "🦋" , "🍤" , "☕️" , "🍕" , "🍒" , "🎊"];
var tle = tl[Math.floor(Math.random() * tl.length)];
const t = Date.parse("January 23, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  if (thu == 'Sunday') thu = 'Chủ nhật'
  if (thu == 'Monday') thu = 'Thứ hai'
  if (thu == 'Tuesday') thu = 'Thứ ba'
  if (thu == 'Wednesday') thu = 'Thứ tư'
  if (thu == "Thursday") thu = 'Thứ năm'
  if (thu == 'Friday') thu = 'Thứ sáu'
  if (thu == 'Saturday') thu = 'Thứ bảy'
const res1 = await axios.get(`https://api-0703.0703-opa.repl.co/images/girl`);
const res2 = await axios.get(`https://api-0703.0703-opa.repl.co/images/girl`);
const res3 = await axios.get(`https://api-0703.0703-opa.repl.co/images/girl`);
const res4 = await axios.get(`https://api-0703.0703-opa.repl.co/images/girl`) 
const res5 = await axios.get(`https://api-0703.0703-opa.repl.co/images/girl`);
const res6 = await axios.get(`https://api-0703.0703-opa.repl.co/images/girl`);
var data1 = res1.data.url;
var array = [];
var data2 = res2.data.url;
var data3 = res3.data.url;
var data4 = res4.data.url;
var data5 = res5.data.url;
var data6 = res6.data.url
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);    
    array.push(downloadfile3);
    array.push(downloadfile4);
    array.push(downloadfile5);    
    array.push(downloadfile6);
  api.sendMessage({
                                                body: `===== 『 𝗔̉𝗡𝗛 𝗚𝗔́𝗜 』 ======\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗔𝗱𝘂𝘂 𝘅𝗶𝗻𝗵 𝘁𝗵𝗶𝗲̣̂𝗰𝗰 𝗰𝗮́𝗰 𝗲𝗺 💓\n→ 𝗦𝗼̂́ 𝗮̉𝗻𝗵: 242 ${tle}`, attachment: array},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }