import createItem from "./services/item.js";
import { addItem, deleteItem, removeItem, displayCart, calcItem, listItem } from "./services/cart.js";

const cart = []
const name1 = "Carregador"
const name2 = "A Cabana"
const name3 = "Estou Aqui"

console.log("\nWelcome to the your Shopee Cart!")


const item1 = await createItem("Carregador", 50, 2, "eletronicos")
const item2 = await createItem("A Cabana", 100, 3, "livros")
const item3 = await createItem("Estou Aqui", 80, 1, "livros")

console.log(`\nItem ${name1} possui valor: ` + item1.subtotal() + " reais")
console.log(`Item ${name2} possui valor: ` + item2.subtotal() + " reais")
console.log(`Item ${name3} possui valor: ` + item3.subtotal() + "reais" )
await addItem(cart, item1)
await addItem(cart, item2)
await addItem(cart, item3)

await removeItem(cart, item1)
await removeItem(cart, item2)
//await removeItem(cart, 0)

await displayCart(cart)
await listItem(cart)

/*console.log(`O produto (${name1}) foi deletado do carrinho`)
await deleteItem(cart, item1.name)*/


await calcItem(cart)


