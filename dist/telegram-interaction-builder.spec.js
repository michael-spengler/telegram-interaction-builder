"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_interaction_builder_1 = require("./telegram-interaction-builder");
let telegramInteractionBuilder;
describe("Processor", () => {
    beforeEach(async () => {
        telegramInteractionBuilder =
            new telegram_interaction_builder_1.TelegramInteractionBuilder();
    });
    it("processes direct match", async () => {
        expect(42)
            .toBe("42");
    });
});
