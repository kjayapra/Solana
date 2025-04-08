import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log('Generated KeyPair');
console.log('Public Key : ', keypair.publicKey);
console.log('Loaded Secret Key : ', keypair.secretKey);
console.log('Finished');