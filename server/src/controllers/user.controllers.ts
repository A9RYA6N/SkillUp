import { Request, Response } from "express"
import {client} from '../database/db'
const postUser = async (req : Request, res : Response ) => {
    const {id,name}=req.body;
    try {
        const result=await client.query('INSERT INTO students(id,name) values ($1, $2) returning *', [id,name])
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error("Insert error:", error);
        res.status(500).json({ success: false, message: "Error creating user" });
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const result = await client.query('SELECT * FROM students');
        res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ success: false, message: "Error fetching users" });
    }
}

const login= async (req: Request, res: Response)=>{
    const {email,pass}=req.body;
    try {
        const result= await client.query('SELECT email, password FROM users WHERE email=$1',[email])
        if(result){
            result.rows[0]['password']==pass?res.status(200).json({success:true, data:result.rows[0]}):res.status(400).json({success:false, message:"Wrong password"})
        }
        else{
            res.status(400).json({success:false, message:"User doesnt exist"})
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Error logging in" });
    }
}

export{getUser, postUser, login}