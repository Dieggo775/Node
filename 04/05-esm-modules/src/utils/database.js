const databaseType = {
    userType: "admin",
    typeData: "data"
}

async function connectToDatabase(dataName) {
    // logica de conexão
    console.log(`Conectado ao banco...${ dataName }`);
}

async function disconnectFromDatabase(dataName) {

    console.log(`Desconectado do banco...${ dataName }`);
}


export {
    connectToDatabase,
    disconnectFromDatabase,
    databaseType
};