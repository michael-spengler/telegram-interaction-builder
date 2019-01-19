# Telegram Interaction Builder
As simple as it gets

# Usage Example

## Preparation
1. Create a config file named .env in your project folder
2. Add an entry in your config file like: **BOT_TOKEN=123**.
3. Make sure to keep your BOT_TOKEN secret e.g. by adding your config file name (.env) to .gitignore.  

## Actual Usage
    import { TelegramInteractionBuilder, DefaultResponseProvider } 
        from "telegram-interaction-builder"

    // remember to keep your BOT_TOKEN secret
    const yourConfigFilePath: string = "../../../.env"

    // you can implement your own ResponseProvider here
    const responseProvider: IResponseProvider = new DefaultResponseProvider()

    const interactionBuilder: TelegramInteractionBuilder = 
        new TelegramInteractionBuilder(yourConfigFilePath, responseProvider)

    interactionBuilder.startListening()

# Feedback
If you find any issues or want to share improvement proposals in general feel free to open an issue [here](https://github.com/michael-spengler/telegram-interaction-builder/issues).