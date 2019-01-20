"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nlp_trainer_1 = require("nlp-trainer");
const nlp_with_actions_1 = require("nlp-with-actions");
const telegram_response_1 = require("./telegram-response");
class AdvancedResponseProvider {
    constructor() {
        this.processor = new nlp_with_actions_1.Processor();
        this.nlpTrainer = new nlp_trainer_1.NLPTrainer();
    }
    async learn() {
        await this.processor.learn(await this.nlpTrainer.getIntents("exampleMap"));
    }
    async getResponse(target, input) {
        console.log(`processing input: ${input}`);
        const answer = await this.processor.process(input);
        console.log(`processing answer: ${answer}`);
        this.telegramResponse = new telegram_response_1.TelegramResponse(target, answer.text, answer.actions);
        return this.telegramResponse;
    }
}
exports.AdvancedResponseProvider = AdvancedResponseProvider;
