const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {

    const messageHash=hashMessage(message);

    const pubKey = await secp.recoverPublicKey(messageHash,signature,recoveryBit );

    return pubKey;

}

module.exports = recoverKey;