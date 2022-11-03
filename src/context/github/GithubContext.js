import {createContext, useReducer} from "react"
import githubReducer from "./GithubReducer"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    //Replacing useState by useReducer
    /*const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)*/
    const initialState = {
        users: [],
        loading: true
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

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
        
        //Replacing useState by useReducer
        /*setUsers(data)
        setLoading(false)*/
        dispatch({
            type: "GET_USERS",
            payload: data
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers: fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext