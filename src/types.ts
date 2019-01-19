import { TelegramResponse } from "./telegram-response";

export interface IResponseProvider {
    getResponse(target: string, input: string): Promise<TelegramResponse> | TelegramResponse
}
