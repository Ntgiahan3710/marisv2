 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `c_user=100053573223605;dpr=1.5;datr=JnQ6ZCDQXSQjQ-ae_L08bFP0;sb=LXQ6ZJx1scL4m3f_B8F_koZg;wd=1396x835;xs=33%3ARi773_pY7-Ur1g%3A2%3A1681316596%3A-1%3A6293%3A%3AAcVuXv4sqCDqbwgiW7_kwIUDeGWXJAuSu-w57Kqc0rQ;fr=0lO7Y1YZRnlKGaLLf.AWWmvvv1gckqt1cd4HwAiozrvcs.BkQV2-.zY.AAA.0.0.BkQogR.AWUrGIZuRq0;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=006b37&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n  \n━━━━━━━━━━\n 𝗮̂𝘆 𝗱𝗼̂ 𝗰𝗮𝗽 𝘁𝗿𝗮𝗻𝗴 𝗰𝗮́ 𝗻𝗵𝗮̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name} \n \n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `c_user=100053573223605;dpr=1.5;datr=JnQ6ZCDQXSQjQ-ae_L08bFP0;sb=LXQ6ZJx1scL4m3f_B8F_koZg;wd=1396x835;xs=33%3ARi773_pY7-Ur1g%3A2%3A1681316596%3A-1%3A6293%3A%3AAcVuXv4sqCDqbwgiW7_kwIUDeGWXJAuSu-w57Kqc0rQ;fr=0lO7Y1YZRnlKGaLLf.AWWmvvv1gckqt1cd4HwAiozrvcs.BkQV2-.zY.AAA.0.0.BkQogR.AWUrGIZuRq0;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=006b37&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』\n B Toàn TT \n━━━━━━━━━━\n 𝗮̂𝘆 𝗱𝗼̂ 𝗰𝗮𝗽 𝘁𝗿𝗮𝗻𝗴 𝗰𝗮́ 𝗻𝗵𝗮̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name} \n \n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
                                }
                  