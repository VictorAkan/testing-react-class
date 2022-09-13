import { useState,useEffect } from "react";
import axios from "axios";
const USERS_API = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
    const [response, setResponse] = useState('')
    const fetchUsers = async () => {
        // const response = await fetch(USERS_API)
        const response = await axios.get(USERS_API)
        // console.log(response);
        // convert it to a json format
        const responseData = response.data
        console.log(responseData);
        // setResponse(response)
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            {/* {response} */}
        </div>
    )
}