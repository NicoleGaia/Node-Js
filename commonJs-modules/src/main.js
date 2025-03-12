const p = require("./services/products")
const config = require("./services/config")

async function main() {
    console.log("carrinho compras:")
    /*p.getFullName("408", "mousepad")
    p.getProductLabel("mousepad")*/
    console.log(config.production)
}
main()