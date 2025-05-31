const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "A3VGGR5Z#Phb50-xSDKTc6CF6zdb9I4fBAJRyaxUDXKMAWCq_als":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:uLqZDkilJfGrLrosGGUwqpOglbohuChg@crossover.proxy.rlwy.net:20777",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
