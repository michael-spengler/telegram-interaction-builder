"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advanced_response_provider_1 = require("./advanced-response-provider");
let advancedResponseProvider;
describe("AdvancedResponseProvider", () => {
    beforeEach(async () => {
        advancedResponseProvider = new advanced_response_provider_1.AdvancedResponseProvider();
    });
    it("process Hi - direct match", async () => {
        await advancedResponseProvider.learn("exampleMap");
        expect(await advancedResponseProvider.getResponse("target", "Hi"))
            .toEqual({
            actions: ["thumbs up", "thumbs down"],
            target: "target", text: "hey man",
        });
    });
    it("process by - expecting the default response", async () => {
        await advancedResponseProvider.learn("exampleMap");
        expect(await advancedResponseProvider.getResponse("target", "by"))
            .toEqual({
            actions: [],
            target: "target", text: "I don't know what to say.",
        });
    });
});
