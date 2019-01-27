"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_response_provider_1 = require("./default-response-provider");
let defaultResponseProvider;
describe("DefaultResponseProvider", () => {
    beforeEach(async () => {
        defaultResponseProvider = new default_response_provider_1.DefaultResponseProvider();
    });
    it("process /start", async () => {
        expect(await defaultResponseProvider.getResponse("target", "/start"))
            .toEqual({ actions: ["Go", "Stop"], target: "target", text: "Hi" });
    });
    it("process by - expecting the default response", async () => {
        expect(await defaultResponseProvider.getResponse("target", "Hi"))
            .toEqual({ actions: [], target: "target", text: "I don't know what to say." });
    });
});
