require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note talk protect hover arena outer gentle'; 
let testAccounts = [
"0x67cf6f9080ab7403ec8706c6241dc9e8e84da2ba7d4a2f286fec2e4454daca5a",
"0x636e13bc43f5013f06aa6dd617cc27e5f6f8477b814712b66e12a5b19123c660",
"0xba9cb53163cfb22f10b0bb53afe0047ff478e7aa9bdea3e9db1e5c56c88e491d",
"0xc6d4c63a0ec6a267e7724bad1d55baac5629a65150c80a76b490b94649a95a74",
"0xa78e36c003bdfd2390c531628379f87f076a8a7504cd2e09343decf24f962ddb",
"0x3f4b2bdbdcf88d2f947866894f8810dd0c55bb95d6a9e2d0297522e6b374c901",
"0x316ca53065f5b4bddb89480c23d62e61a64b4f95f3f8818b89ee2ca3ce144ce0",
"0x5bfd38822f8950f139f3f21bf5f035ec9b59fffedc0c37c1010ce4fda3775831",
"0xaf59f23a60162f8675deb22a2e083bc22d39748237948d220b72760178d475b5",
"0xf9211565f3c1d1b28d85a008e3503661d57d421b29d724e9c661c9007744536c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


