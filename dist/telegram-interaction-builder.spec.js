"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_response_provider_1 = require("./default-response-provider");
const telegram_interaction_builder_1 = require("./telegram-interaction-builder");
let telegramInteractionBuilder;
describe("TelegramInteractionBuilder", () => {
    beforeEach(async () => {
        telegramInteractionBuilder =
            new telegram_interaction_builder_1.TelegramInteractionBuilder("../.env", new default_response_provider_1.DefaultResponseProvider());
    });
    it("make sure the Telegram Bot is up and running", async () => {
        expect(await telegramInteractionBuilder.getBotData())
            .toBeDefined();
    });
});
