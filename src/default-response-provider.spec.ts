import { DefaultResponseProvider } from "./default-response-provider"

let defaultResponseProvider: DefaultResponseProvider

describe("DefaultResponseProvider", () => {
    beforeEach(async () => {
        defaultResponseProvider = new DefaultResponseProvider()
    })

    it("process /start", async () => {
        expect(await defaultResponseProvider.getResponse("target", "/start"))
            .toEqual({ actions: ["Go", "Stop"], target: "target", text: "Hi" })
    })

    it("process by - expecting the default response", async () => {
        expect(await defaultResponseProvider.getResponse("target", "Hi"))
            .toEqual({ actions: [], target: "target", text: "I don't know what to say." })
    })
})
