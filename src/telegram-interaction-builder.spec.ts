import { AdvancedResponseProvider } from "./advanced-response-provider"
import { DefaultResponseProvider } from "./default-response-provider"
import { TelegramInteractionBuilder } from "./telegram-interaction-builder"

describe("TelegramInteractionBuilder", () => {

    it("make sure the Telegram Bot is up and running", async () => {
        const telegramInteractionBuilder: TelegramInteractionBuilder =
            new TelegramInteractionBuilder("../.env", new DefaultResponseProvider())

        expect(await telegramInteractionBuilder.getBotData())
            .toBeDefined()

        telegramInteractionBuilder.startListening()
    })

    it("sets the response provider", async () => {
        const telegramInteractionBuilder: TelegramInteractionBuilder =
            new TelegramInteractionBuilder("../.env", new DefaultResponseProvider())

        expect(telegramInteractionBuilder.getNameOfResponseProvider())
            .toEqual("DefaultResponseProvider")

        telegramInteractionBuilder.setResponseProvider(new AdvancedResponseProvider())

        expect(telegramInteractionBuilder.getNameOfResponseProvider())
            .toEqual("AdvancedResponseProvider")
    })
})
