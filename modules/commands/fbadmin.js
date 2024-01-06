module.exports.config = {
  name: "fbadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Toàn",
  description: "Kiểm tra thông tin fb admin .",
  commandCategory: "Thông tin admin",
  usages: "fb",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/X1IaBwe.png",
"",
"",
"",
"",
];
  var callback = () => api.sendMessage({body:`Gia Hân \n FB: https://www.facebook.com/profile.php?id=100090562700474`,attachment: fs.createReadStream(__dirname + "/cache/fbad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbad.png")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/fbad.png")).on("close",() => callback());
   };