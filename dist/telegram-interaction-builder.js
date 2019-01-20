"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_reader_1 = require("configuration-reader");
const path = require("path");
const telegram_response_1 = require("./telegram-response");
class TelegramInteractionBuilder {
    constructor(relativePathToYourConfigFile, responseProvider) {
        this.configurationReader = new configuration_reader_1.ConfigurationReader(path.join(__dirname, relativePathToYourConfigFile));
        this.teleBot = new TelegramInteractionBuilder.teleBotModule(this.getBotParameters());
        this.responseProvider = responseProvider;
        this.teleBot.on(telegram_response_1.triggeringEvents.text, async (msg) => this.handleText(msg));
        this.teleBot.on(telegram_response_1.triggeringEvents.callbackQuery, async (msg) => this.handleCallBackQuery(msg));
    }
    setResponseProvider(responseProvider) {
        this.responseProvider = responseProvider;
    }
    startListening() {
        this.teleBot.start();
    }
    async getBotData() {
        return this.teleBot.getMe();
    }
    async handleText(msg) {
        const telegramResponse = await this.responseProvider.getResponse(msg.from.id, msg.text);
        await this.teleBot.sendMessage(telegramResponse.getTarget(), telegramResponse.getText(), this.addTelegramButtons(telegramResponse.getActions()));
    }
    async handleCallBackQuery(msg) {
        const telegramResponse = await this.responseProvider.getResponse(msg.from.id, msg.text);
        await this.teleBot.sendMessage(telegramResponse.getTarget(), telegramResponse.getText(), this.addTelegramButtons(telegramResponse.getActions()));
    }
    getBotParameters() {
        return {
            token: this.configurationReader.get("BOT_TOKEN"),
            usePlugins: [
                "askUser",
                "commandButton",
            ],
        };
    }
    addTelegramButtons(actions) {
        const buttons = [];
        for (const action of actions) {
            buttons.push(this.teleBot.inlineButton(action, { callback: `/${actions}` }));
        }
        return {
            replyMarkup: this.teleBot.inlineKeyboard([buttons]),
        };
    }
}
TelegramInteractionBuilder.teleBotModule = 
// tslint:disable-next-line:no-require-imports
require("telebot");
exports.TelegramInteractionBuilder = TelegramInteractionBuilder;
