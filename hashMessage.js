const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");







 function hashMessage(message) {

    const msgHash = keccak256(utf8ToBytes(message));
    return msgHash;

}

module.exports = hashMessage;