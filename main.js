const { Connection } = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl('devnet'));

async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
    const connection = new Connection(clusterApiUrl('devnet'));
    return connection.getBalance(DxYKAQ4V2tWkrYhxEgH5eLxfG6Xa7gvet25a8aeDRvvV);
}

console.log(getBalanceUsingWeb3);