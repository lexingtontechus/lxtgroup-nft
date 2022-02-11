const { default: Resolution } = require("@unstoppabledomains/resolution");
const resolution = new Resolution();

function resolve(domain, currency) {
  resolution
    .addr(domain, currency)
    .then((address) => console.log(domain, "resolves to", address))
    .catch(console.error);
}

function resolveMultiChain(domain, currency, chain) {
  resolution
    .multiChainAddr(domain, currency, chain)
    .then((address) => console.log(domain, "resolves to", address))
    //, version))
    .catch(console.error);
}

resolve("lxtgroup.nft", "ETH");
//resolve('brad.zil', 'ZIL');
//resolveMultiChain("lexingtontechus.nft", "USDT", "ERC20");
//resolveMultiChain('lexintontechus.nft', 'USDT', 'OMNI');
//resolve('brad.crypto', 'ETH');
//resolve('brad.zil', 'ZIL');
//resolveMultiChain('brad.crypto', 'USDT', 'ERC20');
//resolveMultiChain('brad.crypto', 'USDT', 'OMNI');
