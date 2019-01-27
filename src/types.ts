import { TelegramResponse } from "./telegram-response"

export interface IResponseProvider {
    getName(): string
    getResponse(target: string, input: string): Promise<TelegramResponse> | TelegramResponse
}
