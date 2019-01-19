import { IResponseProvider } from "./telegram-response-provider";
export declare class TelegramInteractionBuilder {
    private static teleBotModule;
    private teleBot;
    private configurationReader;
    private responseProvider;
    constructor(relativePathToYourConfigFile: string, responseProvider: IResponseProvider);
    startListening(): void;
    getBotData(): Promise<any>;
    private handleText(msg);
    private handleCallBackQuery(msg);
    private getBotParameters();
    private addTelegramButtons(actions);
}
