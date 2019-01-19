"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_response_1 = require("./telegram-response");
const nlp_with_actions_1 = require("nlp-with-actions");
class AdvancedResponseProvider {
    constructor() {
        this.processor = new nlp_with_actions_1.Processor();
    }
    async learn() {
        await this.processor.learn(nlp_with_actions_1.exampleMap);
    }
    async getResponse(target, input) {
        const answer = await this.processor.process(input);
        this.telegramResponse = new telegram_response_1.TelegramResponse(target, answer.text, answer.actions);
        console.log(answer);
        return this.telegramResponse;
    }
}
exports.AdvancedResponseProvider = AdvancedResponseProvider;
