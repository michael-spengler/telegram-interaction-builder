import { TelegramResponse } from "./telegram-response";
import { IResponseProvider } from "./types";
export declare class AdvancedResponseProvider implements IResponseProvider {
    private telegramResponse;
    private readonly processor;
    private readonly nlpTrainer;
    constructor();
    getName(): string;
    learn(trainingDataID: string): Promise<void>;
    getResponse(target: string, input: string): Promise<TelegramResponse>;
}
