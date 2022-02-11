const { default: Resolution } = require("@unstoppabledomains/resolution");
const resolution = new Resolution();

function resolveCustomRecord(domain, record) {
  resolution
    .records(domain, [record])
    .then((value) => console.log(`Domain ${domain} ${record} is: ${value}`))
    .catch(console.error);
}

resolveCustomRecord("lxtgroup.nft", "custom.record.value");
