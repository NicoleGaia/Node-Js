async function getFullName(codeId, productName){
   console.log("product " + codeId + " - " + productName ) 
}

async function getProductLabel(productName){
    console.log("Product "+ productName)
}
module.exports = {
    getFullName,
    getProductLabel,
}