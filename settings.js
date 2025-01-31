/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01Pc3JvSnJOcnNHSHRoTnQ3cURJWkNxbzhZLzNJSDJyN01wOFRQZEtuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialVwb2FtTkdXcnNBNWVQVElkWjFlakNMbXBHL3ovMWVtSGM5alNBTnpCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSkp3QXZ3TU80RmlmRVo5dmt5OFpKbHczT1kwaW5qenphenFwRldkR0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRK1piNzBmMWFRdXc4RGZWOTdEWCsxNEZ4RzdwTXgrbS92ajhBbzVJWmd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFcGJReVJNNlBjWE5xdVZiV3ptdmY1dXo0N1ZOdVp2WUZDQThTN09CMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcxVmRDTG9wUVdRMjdPNzNZUktFaW9xS3dHVmlta2g1USthQ1ByMUo1RE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZvZlpFVVphTzdYcEdSckFPSkVpK1NZdFl3Tk5jYTdyMDJjalhsMHNWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGtqTHpmKzV0RUppYzh0T1JHL21NWGwwMHdkNmRVTXA1NUJXOEcvUWREUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRORHBWRlp1S1k5ZlNoOHJmN0U1cGZpSGRSL0s3bzNFL2k5S0lIZnozazFpNCsyajcyaDBIYXVac3ltKytLSDJQYzVRcGplY2I2Si85aXVpSmpuRmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IkZaVFFDWEFsYUJTQnJ3MjFrbWFKOUZHcEJEdXNSR2dyNXgyQkt1akpWdDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRkaTIzSE5JUUZhRmtobGVXYXdZNHciLCJwaG9uZUlkIjoiZGU2NGY2NjEtYzc2ZS00NDdmLThmZGItNTI5YjY4ZWUzZTIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjczMlpvc1RPUXBuUDM1Q016eFhBYlVmd3g5VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQWQ1UXBsUnhWd0UvWTJjZGFkN3d4YWtNS1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDU5UUdFM0wiLCJtZSI6eyJpZCI6IjI1Njc0MzM5MTU2Njo0MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3I5emNZR0VPQ2M4N3dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUGRrblBrYTgxTnpMZ0xZdGxkeTFLa1MwSzRBdXlDZlRTY2ovV1FJSm9Ycz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYVNLMGw4Q2dlM2o3Q0tFc1pqd0hUbkxCcTBQanFqdmdnMmRmUFFHcU5VSTR2SG9LNVhlTGxiY1pEV1lrM29CR1JYdkg3QmVBQUJPc2N4ZWd6ZVpNQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InIvaUZiSFlsUXkzaVUvb2Zkd3NSS3dYYjFwU2d2Nlg5dnhtZFFNN211K3BETC9KWFVXTk1uWmVxTWRSZzVHU3BITVRoWWtpdld2WXJqNE44d1hHdWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzQzMzkxNTY2OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQzWkp6NUd2TlRjeTRDMkxaWGN0U3BFdEN1QUxzZ24wMG5JLzFrQ0NhRjcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzgzMjk3MTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2E5In0=';

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
const autoread = process.env.AUTOREAD || 'false';
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
