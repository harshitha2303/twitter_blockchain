import {ethers} from 'ethers';

import * as Constants from "../../Utils/config";

async function handler(req,res){
    try{
        const {tweet}=req.body;
        const provider=new ethers.providers.JsonRpcProvider(Constants.API_URL);
        const signer=new ethers.Wallet(Constants.PRIVATE_KEY,provider);
        const contract=new ethers.Contract(Constants.contrataddress,Constants.contractAbi,signer);
        const tx=await contract.addtweet(tweet);
        await tx.wait();

        res.status(200).json({message :"tweet added"});



    }
    catch(err)
    {
        console.error(err);
    }
}

export default handler;