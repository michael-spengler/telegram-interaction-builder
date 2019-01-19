import { TelegramResponse } from "./telegram-response";
export interface IResponseProvider {
    getResponse(target: string, input: string): TelegramResponse
}

export class ResponseProvider implements IResponseProvider {

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
