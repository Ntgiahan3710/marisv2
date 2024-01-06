var configCommand = {
    name: 'autodownurl',
    version: '1.1.1',
    hasPermssion: 1,
    credits: 'Rainerin',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
downloader = require('image-downloader'),
fse = require('fs-extra'),
toolsFb = {
    getVideoUrl: async (url) => {
      const res = await axios.get('https://apidocs-thanhali.thanhali.repl.co/fbdownload?apikey=ThanhAliVip_1234567890&url=' + encodeURIComponent(url));
      return res.data.data.medias[res.data.data.medias.length - 1].url;
    }
  },
path = __dirname+'/cache/statusAuto.json';

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

async function streamURL(url, mime) {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID),
    arr = arg.event.args || [],
    regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
    regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
    regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/\w+\/\w?(\/)?/,
    regEx_instagram = /http(s|):\/\/(www\.)?instagram\.com\/(reel|p)\/\w+/,
    regEx_SC = /^(https?:\/\/)?(www.)?(m\.)?soundcloud\.com\/[\w\-\.]+(\/)+[\w\-\.]+/,
    regEx_ZingMp3 = /^(https?:\/\/)?(www.)?(m\.)?(mp3|zing)mp3\.vn\/bai-hat\/[\w\-\.]+\/\w+/;
  
    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `====== [ 𝐓𝐈𝐊𝐓𝐎𝐊 ] ======\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲: ${data.title}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${data.digg_count}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${data.comment_count}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${data.share_count}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${data.download_count}\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰`, attachment: await streamURL(data.play, 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                    name: 'autodownurl', messageID: dataMsg.messageID, url_audio: data.music
                })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
		if (regEx_youtube.test(el)) {
			const data = (await axios.get(`https://apidocs-thanhali.thanhali.repl.co/youtube/download`, {
				params: {
					id: el,
					apikey: `ThanhAliVip_1234567890`
				}
			})).data;
			const info = (a) => `====== [ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 ] ======\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲: ${a.title}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${a.t}s\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺`;
			const MAX_SIZE = 87031808;
			const getFormatVideo = (data.links.find(f => f.type === "mp4" || f.type == 'm4a').qualitys.filter(f => f.size < MAX_SIZE) || []);
			const getFormatAudio = (data.links.find(f => f.type === "mp3").qualitys.filter(f => f.size < MAX_SIZE) || [])[0];
			// if (!getFormatVideo)
			//     return out({
			//         body: `Rất tiếc, không tìm thấy video nào có dung lượng nhỏ hơn 83MB`,
			//     }, '');
			let success = false;
			for (const video of getFormatVideo)
				if (video.size || 0 < 87031808) {
					const res = await axios({
						url: video.dlink,
						method: 'GET',
						responseType: 'stream',
						httpsAgent: agent
					});
					res.data.path = 'video.mp4';
					try {
						const datMsg = await out({
							body: `${info(data, data.timer)}\n\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰\n`,
							attachment: res.data
						}, '');
						global.client.handleReaction.push({
							name: 'autodownurl',
							messageID: datMsg.messageID,
							url_audio: getFormatAudio.dlink,
							agent
						});
						success = true;
						break;
					}
					catch (e) {
					}
				}
			if (!success)
				return out({
					body: `Rất tiếc, đã có lỗi xảy ra khi tải video`,
				}, '');
			// else if (getFormatAudio.size || 0 < 26214400) {
			//     const res = await axios({
			//         url: getFormatAudio.dlink,
			//         method: 'GET',
			//         responseType: 'stream',
			//         httpsAgent: agent
			//     });
			//     res.data.path = 'audio.mp3';
			//     out({
			//         body: (info(data)) + `\n`,
			//         attachment: res.data
			//     });
			// }
		}

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
    if (el.includes('facebook.com/story.php') || regEx_facebook.test(el)) {
      const fdl = await toolsFb.getVideoUrl(el);
      // console.log(fdl);
      out({
        body: '====== [ 𝐒𝐓𝐎𝐑𝐘 𝐅𝐁 ] ======\n━━━━━━━━━━━━━━\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰', attachment: await streamURL(fdl, 'mp4')
      }, '', async (err, dataMsg) => global.client.handleReaction.push({
        name: 'autodownurl', messageID: dataMsg.messageID, url_audio: fdl
      }));
    }
    /* END */

      // Auto SoundCloud
    if (regEx_SC.test(el)) {
      const audioStream = await axios.get(`https://apidocs-thanhali.thanhali.repl.co/soundcloud/download?apikey=ThanhAliVip_1234567890&link=${encodeURIComponent(el)}`, {
        responseType: 'stream'
      });
      audioStream.data.path = 'sing.mp3';
      return out({
        body: '==== [ 𝗦𝗢𝗨𝗡𝗗 𝗖𝗟𝗢𝗨𝗗 ] ====\n━━━━━━━━━━━━━━\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n\n️️🎼 𝗡𝗵𝗮̣𝗰 𝘁𝗮̉𝗶 𝘁𝘂̛̀ 𝘀𝗼𝘂𝗻𝗱𝗰𝗹𝗼𝘂𝗱 𝘃𝗲̂̀ 𝗺𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗻𝗲̀', attachment: audioStream.data
      });
    }
if (regEx_instagram.test(el)) {
			try {
				// const isImage = /\/p\//.test(el);
        // console.log(`https://${global.configApi.domain}/instagram/dlpost?apikey=${global.configApi.apiKey}&url=${encodeURIComponent(el)}`)
				const res = await axios({
					url: `${global.configApi.domain}/instagram/dlpost?url=${encodeURIComponent(el)}`,
					method: 'GET'
				});
				// const isImage = (res.data.carousel_media || res.data.image_versions2?.candidates) ? true : false;
				// console.log([{ image_versions2: res.data.image_versions2 }])
				// console.log(res.data.video_versions)

				// if (res.data.video_versions) {
				// 	const resStream = await axios({
				// 		url: res.data.video_versions[0].url,
				// 		method: 'GET',
				// 		responseType: 'stream'
				// 	});
				// 	resStream.data.path = 'video.mp4';
				// 	return out({
				// 		attachment: resStream.data
				// 	});
				// }
				// else if (isImage) {
				// 	const allImage = await Promise.all((res.data.carousel_media || [{ image_versions2: res.data.image_versions2 }]).map(item => axios.get(item.image_versions2.candidates[0].url, {
				// 		responseType: 'stream'
				// 	})
				// 		.then(res => {
				// 			res.data.path = `${Date.now()}.png`;
				// 			return res.data;
				// 		})));
				// 	return out({
				// 		attachment: allImage
				// 	});
				// }
        // console.log(res.data)
				const allAttachment = await Promise.all([...res.data.videos, ...res.data.images].map(item => axios.get(item, {
					responseType: 'stream'
				})
					.then(ress => {
						ress.data.path = `${Date.now()}.${res.data.videos.includes(item) ? 'mp4' : 'png'}`;
						return ress.data;
					})
          .catch(err => {
            console.log(err);
            return null;
          })
        ));
				return out({
        body: '=== [ 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 ] ===\n━━━━━━━━━━━━\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺', attachment: allAttachment
				});
			}
			catch (err) {
				console.log(err)
			}
		}
      // Zingmp3
    if (regEx_ZingMp3.test(el)) {
      const audioStream = await axios.get(`https://apidocs-thanhali.thanhali.repl.co/zingmp3/download?apikey=ThanhAliVip_1234567890&link=${encodeURIComponent(el)}`, {
        responseType: 'stream'
      });
      audioStream.data.path = 'sing.mp3';
      return out({
        body: '====== [ 𝗭𝗜𝗡𝗚 𝗠𝗣𝟯 ] ======\n━━━━━━━━━━━━━━\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n\n️🎶 𝗡𝗵𝗮̣𝗰 𝘁𝗮̉𝗶 𝘁𝘂̛̀ 𝘇𝗶𝗻𝗴 𝗺𝗽𝟯 𝘃𝗲̂̀ 𝗺𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗿𝗼̂̀𝗶 𝗻𝗲̀', attachment: audioStream.data
      });
		}
	}
}

async function reactionMsg(arg) {
  if(arg.event.reaction == '👌') // code
  {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d),
    _ = arg.handleReaction;
    if ('url_audio'in _) out({
        body: `====== [ 𝐌𝐔𝐒𝐈𝐂 ] ======\n━━━━━━━━━━━━━━\n\n👉 𝗟𝗮̂́𝘆 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴`, attachment: await streamURL(_.url_audio, 'mp3')}, '', '', _.messageID);
  }
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean'||!!data[arg.event.threadID]?false: true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s?'[ 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ] - 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 𝗯𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴': '[ 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ] - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴')+' '+configCommand.name+' ✅');
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};