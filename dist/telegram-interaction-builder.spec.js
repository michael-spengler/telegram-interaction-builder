"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advanced_response_provider_1 = require("./advanced-response-provider");
const default_response_provider_1 = require("./default-response-provider");
const telegram_interaction_builder_1 = require("./telegram-interaction-builder");
describe("TelegramInteractionBuilder", () => {
    it("make sure the Telegram Bot is up and running", async () => {
        const telegramInteractionBuilder = new telegram_interaction_builder_1.TelegramInteractionBuilder("../.env", new default_response_provider_1.DefaultResponseProvider());
        expect(await telegramInteractionBuilder.getBotData())
            .toBeDefined();
        telegramInteractionBuilder.startListening();
    });
    it("sets the response provider", async () => {
        const telegramInteractionBuilder = new telegram_interaction_builder_1.TelegramInteractionBuilder("../.env", new default_response_provider_1.DefaultResponseProvider());
        expect(telegramInteractionBuilder.getNameOfResponseProvider())
            .toEqual("DefaultResponseProvider");
        telegramInteractionBuilder.setResponseProvider(new advanced_response_provider_1.AdvancedResponseProvider());
        expect(telegramInteractionBuilder.getNameOfResponseProvider())
            .toEqual("AdvancedResponseProvider");
    });
});
