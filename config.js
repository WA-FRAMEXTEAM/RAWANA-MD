const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "ZrkBmAIb#OKemXb5EYwku7vFkA3qGKcTAJUacpOg2BG2VymaQB7I":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:zATSetwQySOzzuYMHcxPhjWrAnoKusUA@shortline.proxy.rlwy.net:20703",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
