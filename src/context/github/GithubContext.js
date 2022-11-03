import {createContext, useState} from "react"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`
        //If we have a token:
        /*, {
            headers: {
                Autorization: `token ${token}`
            }
        }*/
        )

        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    return <GithubContext.Provider value={{
        users: users,
        loading: loading,
        fetchUsers: fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext