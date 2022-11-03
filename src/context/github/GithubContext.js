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
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //If we want to load data by default
    const fetchUsers = async () => {
        setLoading()

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
    //End of default data

    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`
        //If we have a token:
        /*, {
            headers: {
                Autorization: `token ${token}`
            }
        }*/
        )

        const {items} = await response.json()
        
        //Replacing useState by useReducer
        /*setUsers(data)
        setLoading(false)*/
        dispatch({
            type: "GET_USERS",
            payload: items
        })
    }

    //Clear users from state
    const clearUsers = () => dispatch({
        type: "CLEAR_USERS"
    })

    //Set loading
    const setLoading = () => dispatch({
        type: "SET_LOADING"
    })

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers: fetchUsers,
        searchUsers: searchUsers,
        clearUsers: clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext