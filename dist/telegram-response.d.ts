export declare enum triggeringEvents {
    text = "text",
    callbackQuery = "callbackQuery",
    wildCard = "*"
}
export declare class TelegramResponse {
    private readonly target;
    private readonly text;
    private readonly actions;
    constructor(target: string, text: string, actions: string[]);
    getTarget(): string;
    getText(): string;
    getActions(): string[];
}
