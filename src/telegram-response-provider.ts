import { TelegramResponse } from "./telegram-response";

export class ResponseProvider {

    private telegramResponse: TelegramResponse | undefined

    public getResponse(target: string, input: string): TelegramResponse {
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
