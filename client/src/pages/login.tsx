import { useState } from "react"
import axios, { AxiosError } from 'axios'
const Login = () => {
    const [error, setError]=useState("");
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [loginData, setLoginData]=useState<{ email: string } | null>(null);
    const data={
        email,
        pass
    }
    const handleSubmit = async()=>{
        setError("");
        try {
            const res = await axios({
                method:"POST",
                url:`http://localhost:3000/api/users/login`,
                data:data,
            })
            if(res.status==200)
            {
                setIsLoggedIn(true);
                setLoginData(res.data.data)
            }
        } catch (err) {
            const error=err as AxiosError;
            const status=error.response?.status;
            if(status==400)
            {
                setError("Wrong password")
            }
            else{
                setError("User doesnt exist")
            }
        }
    }
    const handleGet=async()=>{
        const res = await axios({
            method:"GET",
            url:`http://localhost:3000/api/users/`,
        })
        console.log(res.data.data)
    }
    return (
        <div>
            {error ? <p>{error}</p> : <></>}
            {isLoggedIn ? <div>
                <p>Welcome {loginData?.email}</p>
            </div> : <>
                <input type="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Enter your password" onChange={(e)=>{setPass(e.target.value)}}/>
                <button onClick={handleSubmit}>Login</button>
                <button onClick={handleGet}>Get</button>
            </>}
            
        </div>
    )
}

export default Login
