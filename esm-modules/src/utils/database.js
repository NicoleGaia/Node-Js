const databaseType = {
    userType: "adimin",
    typeData: "datalocal"
}

async function connectToDataBase(dataName) {
    console.log(`Conectado ao banco ${dataName}`)
}

async function desconnectDataBase() {
    console.log('Desconectando do banco de dados')
}
/*module.exports = connectToDataBase => commonJS
EQUIVALE = */
//export default connectToDataBase //=> ESM

export {
    connectToDataBase,
    desconnectDataBase,
}