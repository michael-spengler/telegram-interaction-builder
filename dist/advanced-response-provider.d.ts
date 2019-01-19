import { TelegramResponse } from "./telegram-response";
import { IResponseProvider } from "./types";
export declare class AdvancedResponseProvider implements IResponseProvider {
    private telegramResponse;
    private processor;
    learn(): Promise<void>;
    getResponse(target: string, input: string): Promise<TelegramResponse>;
}
