//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Lahore, Pakistan";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://QasimRai:Lunmera@atlascluster.ahk537j.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "";
global.sudo = process.env.SUDO || "923051391007";
global.owner = process.env.OWNER_NUMBER || "923051391007";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1B1MUlVQThrcGgrVCtsdVlyNndKa0xhN090Vlg4R3J3bXFOL1RzWWdXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnNiaXFvM3dpdkRaZnVoblFzTHdNbnA3em8vNVlFVVozNGd1RjRtZnBFQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ3pOWVZxRzZ1VGlYcVdUYms3QVcrU010bUYwblY4WExkNnpiM1c5OEdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMd3lmQk5NSXArWXJkUVhnSHhKRWZFYTUxUEliWmVGWEFxV0lwSnV6MEFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOanJScDFBcUx0bW1DSnlEWGtGb3hNak8waUNtR3NLR1hySklVZDNObk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFlQmpVK1BLS0V5UW1odTRpakRYMUdZTnNRMXdGWEVsci9EU0JLWnNIRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xMalRBUHZnOTlpNnBHZ2l2d1pSYlZ1YUpyMWkvc2cvRytNS3BIaklWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE80QkJBam1XWjRWWlcyUlNXSHd3am5TV2tXekpERXBOZG15T2Y0U2dGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFOUzcyVWw4QTNXQlJVV2ZrbGp6MjNVOS9DN0VNVkUzSmwyZU9MYkhhK3pCQTQ0emNKV0w5ZTF6eEVXM3oyeGVMR3dKUG1ETWlFNWNudHFkcnF1M0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJsQ3g1Y25FVWRaaFVXSVNHSXJNVUpxRFBpVWU2c090QkNZcWR2cHJUQkNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MTM5MTAwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQjAyRUFCMjU3QTk2MzdENTI4MkU2QTBBODgxQjQzQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwODc1MTQ3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSUXM2N2xTcVRMT2hYQ005VmRIRTB3IiwicGhvbmVJZCI6IjNlNDk1NjNkLTZkNDMtNDc3MC1hZGVkLTQ1ZDhlNjQzNjc4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWkRQNDBOeStVVDE5ck92N0hyTTg4aW5FMVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWFEMkRHajM1dTJyeTlGN1Baa3pCVFJ4SVo4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1XR0JZWTJCIiwibWUiOnsiaWQiOiI5MjMwNTEzOTEwMDc6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09IaXZwY0hFUHZ3eWJRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9Ba2ppdFJzc2xqYlhPS1ljRzVrUThieFV2R3J0a0UyaTdBK3JpL21hWHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImE5Q3RPano0UzAwT2FhZ3VSUDU2dFF2d041NjFGbmZYNnRRb0lKTW5WR1gzSytlMXRhcENpcHFkMm5BWW9FOHBVM3o2UlBUNThMbU1aKzA3SEdXNUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBc21ZYnU5eUg2aXVGb3JwSjRFYUZZNVNISFZ3bTFjaWFPY0tMQVZFVnpYRjRmeXBqeXJSMjZUT2tvN2k2K21sMkJnYjFHazhBTWl0YnQwalNKOFBEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA1MTM5MTAwNzo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmd0pJNHJVYkxKWTIxemltSEJ1WkVQRzhWTHhxN1pCTm91d1BxNHY1bWw3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODc1MTQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNGNSJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`STRANGER™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "ROBOT",
  ownername: process.env.OWNER_NAME || "STRANGER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
