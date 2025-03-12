const p = require("./services/products")

async function main() {
    console.log("Ola meu nome é system")
    p.getFullName("408", "mousepad")
    p.getProductLabel("mousepad")
}
main()