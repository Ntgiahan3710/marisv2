module.exports.config = {
    "name": "ad",
    "version": "1.0.0",
    "hasPermssion": 0,
    "credits": "Nhan Tuan",
    "description": "Kiểm tra thông tin admin .",
    "commandCategory": "Tiện ích",
    "usages": "adm",
    "cooldowns": 5,
    "dependencies": {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
  "https://i.imgur.com/mgYHSzJ.mp4"
];
var callback = () => api.sendMessage({body:`=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ====\n
Chỉ có một ADMIN chính thôi đéo có AD nào nữa đâu cu à 
🌐𝐅𝐛: https://www.facebook.com/TuanKaiDu1m2?mibextid=LQQJ4d
--------------------
🛸𝐃𝐨𝐧𝐚𝐭𝐞:
💳𝐕𝐂𝐁: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
💳𝐌𝐁: 22223815042007 / TRAN NHAN TUAN
📲𝐌𝐎𝐌𝐎: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
[admin] Cảm ơn bạn đã dùng bot của Ntuan chúc các bạn dùng bot vui vẻ,không được spam dưới mọi hình thức nếu bị "BAN" admin sẽ không gỡ BAN dưới mọi hình thức! cảm ơn👾`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
};
//tự edit body nhá ...=thay thông tin 
//Sen code lại th nên bớt soi 
//cách lấy ảnh gắn ở trên 
//B1 Truy cập https://imgur.com chọn newpost
//B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq //B3 Copy link như trên rồi thêm .jpg vào là done 
//Chúc thành công