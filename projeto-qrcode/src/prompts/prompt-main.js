import chalk from 'chalk'
const mainPrompt = [{
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta 1 - QrCode ou 2 - Password"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true
}]

export default mainPrompt