    const TelegramBot = require('node-telegram-bot-api');
    const token = process.env.BOT_TOKEN;
    const bot = new TelegramBot(token, {polling: true});

    bot.onText(/\/start/, (msg) => {
      bot.sendMessage(msg.chat.id, "Ayaz King 👑 Bot V2 Live hai!");
    });

    console.log('Bot V2 chal gaya...');