import { TelegramResponse } from "./telegram-response";
export interface IResponseProvider {
    getResponse(target: string, input: string): TelegramResponse;
}
export declare class ResponseProvider implements IResponseProvider {
    private telegramResponse;
    getResponse(target: string, input: string): TelegramResponse;
}
