import { TelegramResponse } from "./telegram-response";
import { Processor, exampleMap, IAnswer } from "nlp-with-actions"
import { IResponseProvider } from "./types";


export class AdvancedResponseProvider implements IResponseProvider {

    private telegramResponse: TelegramResponse | undefined
    private processor: Processor = new Processor()

    public async learn(): Promise<void> {
        await this.processor.learn(exampleMap)
    }

    public async getResponse(target: string, input: string): Promise<TelegramResponse> {

        const answer: IAnswer = await this.processor.process(input)

        this.telegramResponse = new TelegramResponse(target, answer.text, answer.actions)
        console.log(answer)

        return this.telegramResponse
    }
}
