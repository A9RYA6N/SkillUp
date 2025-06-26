import dotenv from 'dotenv';
dotenv.config(); 
import app from "./app";
import connectDb from './src/database/db'

const PORT = process.env.PORT || 8000;
const startServer=async()=>{
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log("Failed to start server ", error)
        process.exit(1);
    }
}
startServer();