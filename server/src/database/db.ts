import { Client, QueryResult } from 'pg';
// connection.query('Select * from students',(err : Error|null,res:QueryResult)=>{
//     if(!err)
//     {
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     connection.end();
// })
const connectDB= async()=>{
    const connection=new Client({
        host:process.env.POSTHOST,
        port:process.env.POSTPORT ? parseInt(process.env.POSTPORT) : 5433,
        user:process.env.POSTUSER,
        password:process.env.POSTPASSWORD,
        database:process.env.POSTDATABASE
    })
    connection.connect().then(()=>{console.log("Connected to database")})
}
export default connectDB