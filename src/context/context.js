import React,{ useEffect,useState,useContext } from "react";

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [users, setUsers] = useState([])

    const incrementCount = () => {
        setCount(count => count + 1)
    }

    const updateText = (e) => {
        setText(e.target.value)
    }

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        return data
    }

    useEffect(() => {
        fetchUsers()
    }, [users])

    return (
        <AppContext.Provider value={{
            count,
            text,
            users,
            incrementCount,
            updateText,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext }