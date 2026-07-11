// todas as funções que lidam com produtos

const productType = {
    version: "digital",
    tax: "x1",
};

const apiUrl = {
    url: "www.google.com.br",
};

async function getFullName(codeId, productName){
    
    console.log("Product: ", codeId + "--" + productName);
    await doBreakLine();
}

//hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(codeId, productName){
    console.log("Product: ", codeId + "--" + productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType
};