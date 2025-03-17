async function connectToDataBase(user, password) {
    if (user === "Nicole" && password === "4242beka"){
        console.log("✅ Conexão com banco de dados estabelecida!")
    } else{
        console.log("❌ Falha de login, não foi possível conexão com banco de dados!")
    }
}

export default connectToDataBase