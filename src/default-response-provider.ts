import { TelegramResponse } from "./telegram-response"
import { IResponseProvider } from "./types"

export class DefaultResponseProvider implements IResponseProvider {

    private telegramResponse: TelegramResponse | undefined

    public getName(): string {
        return this.constructor.name
    }

    public async getResponse(target: string, input: string): Promise<TelegramResponse> {
        switch (input) {
            case "/start": {
                this.telegramResponse = new TelegramResponse(target, "Hi", ["Go", "Stop"])
                break
            }
            default: {
                this.telegramResponse = new TelegramResponse(target, "I don't know what to say.", [])
            }
        }

        return this.telegramResponse
    }
}
