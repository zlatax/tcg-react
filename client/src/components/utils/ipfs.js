const IPFS = require('ipfs-api');
const ipfs = new IPFS({host:'api.pinata.cloud', port:5001, protocol:'https'})

export default ipfs;