const { default: Resolution } = require("@unstoppabledomains/resolution");
const resolution = new Resolution();

function resolveIpfsHash(domain) {
  resolution
    .ipfsHash(domain)
    .then((hash) =>
      console.log(
        `You can access this website via a public IPFS gateway: https://gateway.ipfs.io/ipfs/${hash}`
      )
    )
    .catch(console.error);
}

resolveIpfsHash("lxtgroup.nft");
