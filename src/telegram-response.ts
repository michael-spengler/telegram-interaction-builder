export enum triggeringEvents {
    text = "text",
    callbackQuery = "callbackQuery",
    wildCard = "*",
}

export class TelegramResponse {
    public constructor(private target: string, private text: string, private actions: string[]) { }

    public getTarget(): string {
        return this.target
    }

    public getText(): string {
        return this.text
    }

    public getActions(): string[] {
        return this.actions
    }
}
