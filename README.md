# Telegram Application Template

This is a Telegram bot application template built using Node.js and the Telegraf library. It provides a basic structure for creating a Telegram bot with some pre-defined commands.

## Prerequisites

Before running this Telegram bot, make sure you have the following installed:

- Node.js (https://nodejs.org)
- NPM (Node Package Manager, comes with Node.js)

## Installation

1. Clone this repository to your local machine or download the code as a ZIP archive.
```sh
git clone https://github.com/SilverJROM/TG_AppTemplate
```

2. Navigate to the project directory in your terminal or command prompt.

3. Install the required dependencies by running the following command:

```sh
npm install
```

## Configuration

1. Rename the `.env.example` file to `.env`.

2. Open the `.env` file and replace `YOUR_BOT_TOKEN` with your actual Telegram bot token. You can obtain a bot token by creating a new bot on [BotFather](https://core.telegram.org/bots#botfather) and following the instructions.

```sh
BOT_TOKEN=<YOUR_BOT_TOKEN>
```

## Usage

To start the Telegram bot, run the following command:

```sh
node main.js
```

## Available Commands

- `/start`: Start the bot and receive a welcome message with instructions on how to play the game.

- `/help`: Show available commands and their descriptions.

- `/guide`: Display a guide on how to use this bot (currently empty).

- `/test`: A test command (currently empty).

## Contributing

Feel free to contribute to this project by opening issues or pull requests on the [GitHub repository](https://github.com/example-user/telegram-bot-template).

## License

This Telegram Application Template is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and use it to build your own Telegram bots.

---

Happy bot building! If you have any questions or need further assistance, don't hesitate to reach out. Enjoy building amazing Telegram bots!
