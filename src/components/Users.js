import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")

    console.log("users state",users);

    useEffect(() => {
        fetchUsers();
        
    }, []);

    const fetchUsers=async()=>{
        try{
            setloading(true);
            const res=await axios.get("https://jsonplaceholder.typicode.com/users")
            setloading(false);
            const data=res.data;
            setusers(data);
        } catch(err)
        {
            setloading(false);
            seterror(err)
        }
    };


    if(!loading){
        if(error){
            return <div style={{color:"red"}}>{error.message}</div>
        }else{
            return (
                <div>
                    {
                        users.map((user)=>{
                            return <p key={users.id}>{user.name}</p>
                        })
                    }
                </div>
            );
        }
    }else{
        return <h2 style={{color:"green"}}>Loading ..!</h2>
    }
}

export default Users
