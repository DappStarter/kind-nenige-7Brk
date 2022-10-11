require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food town rescue pitch uncover coral light army gasp'; 
let testAccounts = [
"0x5b1750de8b3cca9907a2388b8c5cca466361c1910fc90952994ada47cce8f1b2",
"0x56cca66920785662c8fb7336920b70c18f8abad022df1d372e6a92a913ad597f",
"0x4e895cced01ad1e34a1c0c38ff2822b3d01a5ecc7bfed9f6cc75364de486be30",
"0x3fc7c092bddd939d394866f484fe1101fb955b6cfe8f24af5014ede3df615f75",
"0xcaebab55cb4b15e7b9b2a4ede667fbd92c54f9316c7d92da68a0ac9622ca16a6",
"0xb8a4cbd99d210e504a30dc436630cecb2ba40709146925423db2c0264034fc65",
"0xf68cf086f1e318f60d0870c2589db69440e9559149494f039e90610bc0b3ac64",
"0xc3f1ad9a2b101e9f427805aee73abf34efb42a1e1a7ebb3a9b8bb48aea87f61a",
"0x6d2a284ea1662f76ca2e49d83dd74d8866a8f64bd36bc5ccb7818e936d5c0011",
"0xd9e81bfffea6a92ce8d1293c4c578463fe5e6f8923e5686ad8d794a876096e4f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

