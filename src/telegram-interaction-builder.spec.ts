import { TelegramInteractionBuilder } from "./telegram-interaction-builder";
import { ResponseProvider } from "./telegram-response-provider";

let telegramInteractionBuilder: TelegramInteractionBuilder

describe("Processor", () => {
    beforeEach(async () => {
        telegramInteractionBuilder =
            new TelegramInteractionBuilder("../.env", new ResponseProvider())
    })

    it("make sure the Telegram Bot is up and running", async () => {
        expect(await telegramInteractionBuilder.getBotData())
            .toBeDefined()
    })
})
