import { IResponseProvider } from "./types";
export declare class TelegramInteractionBuilder {
    private static readonly teleBotModule;
    private readonly teleBot;
    private readonly configurationReader;
    private responseProvider;
    constructor(relativePathToYourConfigFile: string, responseProvider: IResponseProvider);
    setResponseProvider(responseProvider: IResponseProvider): void;
    startListening(): void;
    getBotData(): Promise<any>;
    private handleText;
    private handleCallBackQuery;
    private getBotParameters;
    private addTelegramButtons;
}
