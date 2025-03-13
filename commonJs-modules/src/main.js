const {getFullName, productType} = require("./services/products")
//const p = require("./servises/products")
const config = require("./services/config")
const database = require("./services/database")

async function main() {
    console.log("carrinho compras:")
    getFullName("1", "teclado")
    // p.getFullName("1", "teclado")

    console.log(productType)

    /*p.getFullName("408", "mousepad")
    p.getProductLabel("mousepad")*/
   // p.productType.version = "digital"
   database.connectToDatabase("my-data")
}
main()