import {
    Connection,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";


const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));
const address = keypair.publicKey;
const balance = await connection.getBalance(address);

console.log(`Address `, address);
console.log(`Balance `, balance/LAMPORTS_PER_SOL);
