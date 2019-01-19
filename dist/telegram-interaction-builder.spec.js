"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_interaction_builder_1 = require("./telegram-interaction-builder");
const telegram_response_provider_1 = require("./telegram-response-provider");
let telegramInteractionBuilder;
describe("Processor", () => {
    beforeEach(async () => {
        telegramInteractionBuilder =
            new telegram_interaction_builder_1.TelegramInteractionBuilder("../.env", new telegram_response_provider_1.ResponseProvider());
    });
    it("make sure the Telegram Bot is up and running", async () => {
        expect(await telegramInteractionBuilder.getBotData())
            .toBeDefined();
    });
});
