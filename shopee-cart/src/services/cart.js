async function addItem(userCart, item) {
   userCart.push(item)
}
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name)
    if(index !== -1){
        userCart.splice(index, 1)
    }
}
async function removeItem(userCart, item){
    //encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    
    //Caso ñ encontre o item
    if(indexFound === -1){
        console.log("Item não encontrado")
        return
    }

    //Item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    // item === 1 remover o item
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        return
    }
    
    
    
    
    /*const deleteIndex = index  // -1
    
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)
    }*/
}
async function displayCart(userCart) {
    console.log("\nShopee Cart: ")
    userCart.forEach((item, index) => {
        console.log(`Item ${index + 1}. ${item.name} - R$ ${item.price},00 | ${item.quantity} und | Valor TOTAL: R$${item.subtotal()},00`)
    })
}
async function calcItem(userCart){
    console.log("\nShopee Cart TOTAL is:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`R$ ${result},00`)
}

export {
    addItem,
    deleteItem,
    removeItem,
    displayCart,
    calcItem
}