const DiscordJS = require("discord.js")
const WOKCommands = require("wokcommands")
const path = require('path')
const schedule = require("./commands/schedule")
const { default: CommandHandler } = require("wokcommands/dist/CommandHandler")
require("dotenv").config()

const client = new DiscordJS.Client({intents: ["GUILDS","GUILD_MESSAGES"]})

client.on("ready", () =>{
    console.log('The bot is ready')
    const dbOptions = {
        keepAlive: true 
    }
    new WOKCommands(client, {
        commandsDir: path.join("C:","Users","popta","DiscordReminderBot","node_modules","wokcommands","dist","commands"),
        /*commandsDir: "C:\Users\popta\DiscordReminderBot\node_modules\wokcommands\dist\commands",*/
        dbOptions,
        showWarns: false,
        mongoUri: ""
    })
})

client.login(process.env.TOKEN) 
