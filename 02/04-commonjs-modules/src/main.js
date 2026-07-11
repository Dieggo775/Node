const { getFullName, productType } = require("../services/products.js");
const products = require("../services/products.js");
const config = require("../services/config.js");
const database = require("../services/database.js");

async function main() {
    console.log("Carrinho Compras");

    getFullName("1", "teclado")
    products.getFullName("2", "mouse")

    console.log(productType);
    // products.getFullName("408", "Teclado Mecanico");
    // products.getFullName("508", "Mouse Gamer");
    // products.getProductLabel("608", "Mouse Pad");

    database.connectToDataBase("my-database");

}

main();
