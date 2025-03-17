import connectToDataBase from "../database/data.js"

async function main() {
    //console.log(process.env.USERDATABASE)
    await connectToDataBase (
        process.env.USERDATABASE,
        process.env.PASSWORDDATABASE
    )
}

main()