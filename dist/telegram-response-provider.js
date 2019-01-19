"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_response_1 = require("./telegram-response");
class ResponseProvider {
    getResponse(target, input) {
        switch (input) {
            case "/start": {
                this.telegramResponse = new telegram_response_1.TelegramResponse(target, "Hi", ["Go", "Stop"]);
                break;
            }
            default: {
                this.telegramResponse = new telegram_response_1.TelegramResponse(target, "I don't know what to say.", []);
            }
        }
        return this.telegramResponse;
    }
}
exports.ResponseProvider = ResponseProvider;
