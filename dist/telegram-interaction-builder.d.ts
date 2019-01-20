import { IResponseProvider } from "./types";
export declare class TelegramInteractionBuilder {
    private static teleBotModule;
    private teleBot;
    private configurationReader;
    private responseProvider;
    constructor(relativePathToYourConfigFile: string, responseProvider: IResponseProvider);
    setResponseProvider(responseProvider: IResponseProvider): void;
    startListening(): void;
    getBotData(): Promise<any>;
    private handleText(msg);
    private handleCallBackQuery(msg);
    private getBotParameters();
    private addTelegramButtons(actions);
}
