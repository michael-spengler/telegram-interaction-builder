import { AdvancedResponseProvider } from "./advanced-response-provider"

let advancedResponseProvider: AdvancedResponseProvider

describe("Processor", () => {
    beforeEach(async () => {
        advancedResponseProvider =
            new AdvancedResponseProvider()
    })

    it("make sure the Telegram Bot is up and running", async () => {
        await advancedResponseProvider.learn()
        expect(await advancedResponseProvider.getResponse("target", "Hi"))
            .toEqual({
                actions: ["thumbs up", "thumbs down"],
                target: "target", text: "hey man",
            })
    })

    it("make sure the Telegram Bot is up and running", async () => {
        await advancedResponseProvider.learn()
        expect(await advancedResponseProvider.getResponse("target", "by"))
            .toEqual({
                actions: [],
                target: "target", text: "I don't know what to say.",
            })
    })
})
