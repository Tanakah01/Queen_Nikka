//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "263718036108";
global.sudo = process.env.SUDO || "263718036108";
global.owner = process.env.OWNER_NUMBER || "263718036108";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tIN2dsU3NmSUw5dDZXT0RZOFJxQUJsZ0h4ZGdWNDhUTVBzTVhiOFVVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEduSzlCUDlwMVFxUVBsZW9Fc2J3NkYyQTZHdlFSbFZSR2VjTmgvT1l6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQnE0R0p6YndHYzJ1Vk1QcjU3aTZ6RVFhaDFscWN6RnJyd2M1dnhJczJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpblkrNG1zS004OXJjUDFmMUZTcTU5TVF3ckZjL3Ara3M3Qy8wVkNPaldrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPS0F6aEdUOEpubmswcEE3UEI2ODdReFI3Y2NqQ2dGcU04dmRvZWpZbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZIbm5yb2J4Z1NVWC95b0JxY1QxUXc4VmE2YldFNEt0OFAyYnhIRnRpMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUYvS1hsUkFMZFpLbjB6T1V3ZjJvd2xZdlQwYUdEeFpOUUx6dWNlcW1IZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ25YaDZKSDQyaENFWFk4ZUIwVnl4L3FvcG5lMGQ5czQzcFo0MlFKa3VUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTclA1bkxaWlNIU3VaL0tqanlkTHBBN1VEei9qN3Z1NHZWN3o3ZjhDUTNUd0xickFOYVZtRmZXZVNNQjFUTlVnT0hQZzAyZVFGRmV3eDlyR3BVbkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiQlZpSldUZTZRSXYxNTJqRG9adUxjTEQ3SzJoU0xEWS9pMDdCek5EMjNBMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSTJuRFhMUzlRWGVPdkpla0xDSUNqdyIsInBob25lSWQiOiIwYmUyZjIxOS05NGMzLTQ2OWEtODg4NC04NDc5YmRjNWRjYWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmJjV3VQVW1VSzJ6YURIMkRoREt3L1hlaWg0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowTE9mcGduU3lNSDRQYzRaV1BaMWorMllMTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1VEI5NkRIOSIsIm1lIjp7ImlkIjoiMjYzNzE4MDM2MTA4OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik4uTy5QIE1BR0VFWiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUcrd0pBRkVLREUyN1lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibUk3elBSK0F1V2lETVZpL2VhRUJsYUw2YmFEUFJacUtwWkh1TFhVUEtVUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTVFWOHVyNkVLRHVPUHFRNi9JNFM3cG1ibXJxRnFVV3RzS0tJMXc4ZWViblFpUUR6ZW4rbGtwK25mQTB3QXNXdk5NMmxvQWpjTFVJOVhSRXNjZkp2Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IndxOG9jNmhvUVNuYmZsN2NOSWoxTTZPR3h6VFp2UkhrTFh0SlNOUDh0b1V6TG04SU1yQzg4VVVRejZaWHRVcDFvZnRwVW5vdmFrU2tPeUcvbDc2ZUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE4MDM2MTA4OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlppTzh6MGZnTGxvZ3pGWXYzbWhBWldpK20yZ3owV2FpcVdSN2kxMUR5bEUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzNTg2MzZ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
