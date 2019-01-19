import { ConfigurationReader } from "configuration-reader"
import * as path from "path"
import { triggeringEvents, TelegramResponse } from "./telegram-response";
import { ResponseProvider } from "./telegram-response-provider";

export class TelegramInteractionBuilder {
    private static teleBotModule: any = require("telebot")

    private teleBot: any
    private configurationReader: ConfigurationReader
    private responseProvider: ResponseProvider

    public constructor(relativePathToYourConfigFile: string) {
        this.configurationReader = new ConfigurationReader(path.join(__dirname, relativePathToYourConfigFile))
        this.teleBot = new TelegramInteractionBuilder.teleBotModule(this.getBotParameters())
        this.responseProvider = new ResponseProvider()

        this.teleBot.on(triggeringEvents.text, async (msg: any) => this.handleText(msg))
        this.teleBot.on(triggeringEvents.callbackQuery, async (msg: any) => this.handleCallBackQuery(msg))
        this.teleBot.start()

    }

    public async getBotData(): Promise<any> {
        return this.teleBot.getMe()
    }

    protected async handleText(msg: any): Promise<void> {
        const telegramResponse: TelegramResponse = this.responseProvider.getResponse(msg.from.id, msg.text)
        await this.teleBot.sendMessage(telegramResponse.getTarget(), telegramResponse.getText(), this.addTelegramButtons(telegramResponse.getActions()))
    }

    protected async handleCallBackQuery(msg: any): Promise<void> {
        const telegramResponse: TelegramResponse = this.responseProvider.getResponse(msg.from.id, msg.text)
        await this.teleBot.sendMessage(telegramResponse.getTarget(), telegramResponse.getText(), this.addTelegramButtons(telegramResponse.getActions()))
    }

    private getBotParameters(): any {
        return {
            token: this.configurationReader.get("BOT_TOKEN"),
            usePlugins: [
                "askUser",
                "commandButton",
            ],
        }
    }

    private addTelegramButtons(actions: string[]): any {
        const buttons: any = []
        for (const action of actions) {
            buttons.push(this.teleBot.inlineButton(action, { callback: `/${actions}` }))
        }

        return {
            replyMarkup: this.teleBot.inlineKeyboard([buttons]),
        }
    }

}