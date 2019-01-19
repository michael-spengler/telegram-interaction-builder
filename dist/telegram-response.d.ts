export declare enum triggeringEvents {
    text = "text",
    callbackQuery = "callbackQuery",
    wildCard = "*",
}
export declare class TelegramResponse {
    private target;
    private text;
    private actions;
    constructor(target: string, text: string, actions: string[]);
    getTarget(): string;
    getText(): string;
    getActions(): string[];
}
