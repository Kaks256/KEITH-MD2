/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZwR1B6OEV1bEJiRjFwdHFibTBBYThhM2FFcVpRRW90WFkyTC9WN3IxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE9NcTlRQkhxMDNjUCttSkd1YzQ5NllLa2ZUVjEyTDMxQXZidTBHcGgxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRW9uMTZYbVRIWGY3MDFMMExUZDArb0NpcjJQWTB5YWRZM2ZBcHgyb0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvNEk4eXV4eEk1djZBVGdVeER2ZW00NDMzQjhGeUl6eWlNNzNicnNYdkJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HcXFBRmJnZWxKOEgzU3c4cm5MNW90Kzk2NURSWFJERHJUeU5xcGFOVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFobFpWYU9XQlRXdHNTR1Z2Q1lReDZZN1RBblZXejh5aXBvc05xOS9TalU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZzVllNekRES2ZpUDRTQllZN1J1TVpOdWJPOG1UdE15UFYweGhFOEFIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnNQbzE3K1pleWthaVlsR0Z2RUxJS0lSeDF4MG53RWswNWNRY3RQa1dnQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDQXVZZXlIQWs4V0JWOHlrNU1QbXRicVJuMHBieVpmMzdadG9hUkQ2a1AwaWw2NG1Sell0aEc5T0VKNUNMc1MvaThTZEpVenhsNjl1SmxkQzhSWEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6InpqRFpZK3VHR1NtZmxtczVlWWlmK2hIUC9aM0lKanBDcVJYc3dybUJhR1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFhb2o2TFpZVHJTUFQ4b01LbnoxNnciLCJwaG9uZUlkIjoiNDRjNDMwOTAtM2U2ZS00MDA3LTkzMmMtZDVmNTMxNjQwZTRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JamhJK2lraTZtdHVZcXYwRGw2SjBTVklBbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZWQvamhnUGkrakdQQ0hKTnVsV0QrYkVCQk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDlRTTQ0SDgiLCJtZSI6eyJpZCI6IjI1Njc0MzM5MTU2Njo2NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmUzdnJzRUVJMlhpTGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTjlUVmJIL0QwVk44T0QrMERuR2VFTUNML0Y3TGtTdmJhTUdzeXluc1FuUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUXJ4OUtuNU9JWGlzdS9LaWU4b0lzRFgrSlpGS2xLbEIyNmtqT1M5WisyNkNoS1p0Tk1JZFFEZHptWXBnTWRSQmoyVm14TjdDUmRFVXZ1bU9saVZqQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkpUY1ZLZE8zSWZrbWxJTkNYVHdwQ2IrQW0xeUxPaHBsUXhoUG02SmQ2di9JWDNXN0djS1gwUmdxem4rUW80Z1dlU3RvTzBpSHdtelpaQjY0OGFEV0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzQzMzkxNTY2OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRmVTFXeC93OUZUZkRnL3RBNXhuaERBaS94ZXk1RXIyMmpCck1zcDdFSjAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAyODQ0NDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkw1In0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "256";
const author = process.env.STICKER_AUTHOR || 'google';
const packname = process.env.PACKNAME || 'google';
const dev = process.env.DEV || '256743391566';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'GOOGLE-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
