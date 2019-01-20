import { DefaultResponseProvider } from "./default-response-provider"
import { TelegramInteractionBuilder } from "./telegram-interaction-builder"

let telegramInteractionBuilder: TelegramInteractionBuilder

describe("Processor", () => {
    beforeEach(async () => {
        telegramInteractionBuilder =
            new TelegramInteractionBuilder("../.env", new DefaultResponseProvider())
    })

    it("make sure the Telegram Bot is up and running", async () => {
        expect(await telegramInteractionBuilder.getBotData())
            .toBeDefined()
    })
})
