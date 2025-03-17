async function connectToDataBase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("✅ Conexão com banco de dados estabelecida!")
    } else{
        console.log("❌ Falha de login, não foi possível conexão com banco de dados!")
    }
}

export default connectToDataBase