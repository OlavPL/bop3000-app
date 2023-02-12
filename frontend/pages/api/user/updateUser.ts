import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";


export default async (req:NextApiRequest, res:NextApiResponse) => {
   try {
    const client = await clientPromise;
    const db = client.db("App_Db");
    const id = (req.body.epost)
    console.log(id)
    const updateDocument={
        $set:{
            name:req.body.name,
            password:req.body.password

        },
    };
    const result = await db.collection("users").updateOne({epost:req.body.epost},updateDocument)
    res.status(200).json(updateDocument+id)

    
   } catch (e) {
       console.error(e);
   }
}