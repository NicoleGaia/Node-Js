import createItem from "./services/item.js";
import { addItem, deleteItem, removeItem, displayCart, calcItem } from "./services/cart.js";

const cart = []
const name1 = "Carregador"
const name2 = "Fone de ouvido"

console.log("\nWelcome to the your Shopee Cart!")


const item1 = await createItem("Carregador", 50, 2)
const item2 = await createItem("Fone de ouvido", 100, 3)

console.log(`\nO ${name1} possui valor: ` + item1.subtotal() + " reais")
console.log(`O ${name2} possui valor: ` + item2.subtotal() + " reais")
await addItem(cart, item1)
await addItem(cart, item2)

await removeItem(cart, item1)
await removeItem(cart, item2)
//await removeItem(cart, 0)

await displayCart(cart)

/*console.log(`O produto (${name1}) foi deletado do carrinho`)
await deleteItem(cart, item1.name)*/


await calcItem(cart)


