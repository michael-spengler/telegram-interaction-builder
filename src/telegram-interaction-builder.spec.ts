import { TelegramInteractionBuilder } from "./telegram-interaction-builder";

let telegramInteractionBuilder: TelegramInteractionBuilder

describe("Processor", () => {
    beforeEach(async () => {
        telegramInteractionBuilder =
            new TelegramInteractionBuilder("../.env")
    })

    it("processes direct match", async () => {
        expect(42)
            .toBe(42)
    })
})
