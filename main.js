const { Telegraf, Markup } = require("telegraf")
const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")

//load environment variables
dotenv.config()

const botToken = process.env.BOT_TOKEN

//new instance of the telegraf bot
const bot = new Telegraf(botToken)

// Start command handler
bot.command("start", (ctx) => {
    ctx.reply(
        "Welcome to the template bot....\n\n" +
            "Use /guide for instructions on how to play the game.\n" +
            "And use /help to see available commands."
    )
})

// Help command handler
bot.command("help", (ctx) => {
    const availableCommands = [
        "/start - Start the bot",
        "/guide - Guide on how to USE this BOT",
        "/help - Show available commands",
        "/test - test command\n",
    ]

    ctx.reply(`Here are the available commands:\n${availableCommands.join("\n")}`)
})

// Guide command handler
bot.command("guide", async (ctx) => {
    ctx.reply(`None yet!`)
})

// leaderboards handler
bot.command("test", async (ctx) => {
    ctx.reply(`None yet`)
})

// Start the bot
bot.startPolling()
