const DiscordJS = require("discord.js")
const WOKCommands = require("wokcommands")
require("dotenv").config()

const client = new DiscordJS.Client({intents: ["GUILDS","GUILD_MESSAGES"]})

client.on("ready", () =>{
    console.log('The bot is ready')
    new WOKCommands(client, {
        commandsDir: "commands",
        showWarns: false
    }).setMongoPath(process.env.MONGO_URI)
})

client.login(process.env.TOKEN) 
