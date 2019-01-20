
import { IIntent, NLPTrainer } from "nlp-trainer"
import { IAnswer, Processor } from "nlp-with-actions"
import { TelegramResponse } from "./telegram-response"
import { IResponseProvider } from "./types"

export class AdvancedResponseProvider implements IResponseProvider {

    private telegramResponse: TelegramResponse | undefined
    private readonly processor: Processor = new Processor()
    private readonly nlpTrainer: NLPTrainer

    public constructor() {
        this.nlpTrainer = new NLPTrainer()
    }

    public async learn(): Promise<void> {
        await this.processor.learn(await this.nlpTrainer.getIntents("exampleMap") as IIntent[])
    }

    public async getResponse(target: string, input: string): Promise<TelegramResponse> {

        const answer: IAnswer = await this.processor.process(input)

        const text: string = (answer.text === undefined) ?
            "I don't know what to say." : answer.text

        this.telegramResponse = new TelegramResponse(target, text, answer.actions)

        return this.telegramResponse
    }
}
