async function createItem(name, price, quantity, type) {
    return {
        name,
        price,
        quantity, 
        type,
        subtotal: () => price * quantity
    }
}

export default createItem