# Telegram Interaction Builder
As simple as it gets  

This package leverages e.g. the [nlp-with-actions](https://www.npmjs.com/package/nlp-with-actions) package


## Preparation
1. Create a config file named .env in your project folder
2. Copy your bot token from the [Telegram BotFather](https://telegram.me/BotFather) to your config file like: **BOT_TOKEN=123**.
3. Make sure to keep your BOT_TOKEN secret e.g. by adding your config file name (.env) to .gitignore.  


## Basic Usage
    import { TelegramInteractionBuilder, DefaultResponseProvider } 
        from "telegram-interaction-builder"

    // remember to keep your BOT_TOKEN secret
    const yourConfigFilePath: string = "../../../.env"

    // you can implement your own ResponseProvider here
    const responseProvider: IResponseProvider = new DefaultResponseProvider()

    const interactionBuilder: TelegramInteractionBuilder = 
        new TelegramInteractionBuilder(yourConfigFilePath, responseProvider)

    interactionBuilder.startListening()


## Advanced Usage
Instead of using the DefaultResponseProvider you can leverage the power of the  
[nlp-with-actions](https://www.npmjs.com/package/nlp-with-actions) package by using the AdvancedResponseProvider like:

    import { TelegramInteractionBuilder, AdvancedResponseProvider } 
        from "telegram-interaction-builder"

    // remember to keep your BOT_TOKEN secret
    const yourConfigFilePath: string = "../../../.env"
        
    const advancedResponseProvider = new AdvancedResponseProvider()
    await advancedResponseProvider.learn("exampleMap")

    const interactionBuilder: TelegramInteractionBuilder = 
        new TelegramInteractionBuilder(yourConfigFilePath, advancedResponseProvider)

    interactionBuilder.startListening()


## Example Repository Using this npm package
You can find an example repository using this npm package [here](https://github.com/michael-spengler/telegram-chatbot-out-of-the-box)


## Feedback
If you find any issues or want to share improvement proposals in general feel free to open an issue [here](https://github.com/michael-spengler/telegram-interaction-builder/issues).


## Contribute
I am interested in save and useful enhancements. Feel free to create [Pull Requests](https://github.com/michael-spengler/telegram-interaction-builder/pulls) on my Repository.