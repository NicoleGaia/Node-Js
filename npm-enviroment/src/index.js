import connectToDataBase from "../database/data.js"

async function main() {
    await connectToDataBase ("Julia", "12345hi")
}

main()