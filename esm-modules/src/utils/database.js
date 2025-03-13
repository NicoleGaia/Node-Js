async function connectToDataBase(dataName) {
    console.log(`Conectado ao banco ${dataName}`)
}

/*module.exports = connectToDataBase => commonJS
EQUIVALE = */
export default connectToDataBase //=> ESM
