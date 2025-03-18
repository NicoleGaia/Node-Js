import {getBaseEmail} from "./services/email"

async function main() {
    console.log(await getBaseEmail("Nicole"))

    console.log("Finalizado")
    console.log("...")
}

main()