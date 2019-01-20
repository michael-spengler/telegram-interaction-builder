"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advanced_response_provider_1 = require("./advanced-response-provider");
let advancedResponseProvider;
describe("Processor", () => {
    beforeEach(async () => {
        advancedResponseProvider =
            new advanced_response_provider_1.AdvancedResponseProvider();
    });
    it("make sure the Telegram Bot is up and running", async () => {
        await advancedResponseProvider.learn();
        expect(await advancedResponseProvider.getResponse("target", "Hi"))
            .toEqual({
            actions: ["thumbs up", "thumbs down"],
            target: "target", text: "hey man",
        });
    });
});
