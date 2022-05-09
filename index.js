const DiscordJS = require("discord.js")
const WOKCommands = require("wokcommands")
require("dotenv").config()

const  cilent = new DiscordJS.cilent()

cilent.on("ready", () =>{
    console.log('The bot is ready')
    new WOKCommands(cilent, {
        commandsDir: "commands",
        showWarns: false
    }).setMongoPath(process.env.MONGO_URI)
})

cilent.login(process.env.TOKEN)
