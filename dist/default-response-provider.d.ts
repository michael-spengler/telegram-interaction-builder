import { TelegramResponse } from "./telegram-response";
import { IResponseProvider } from "./types";
export declare class DefaultResponseProvider implements IResponseProvider {
    private telegramResponse;
    getName(): string;
    getResponse(target: string, input: string): Promise<TelegramResponse>;
}
