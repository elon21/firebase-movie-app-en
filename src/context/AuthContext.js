import {createContext, useState, useEffect} from 'react';
import {userObserver} from '../auth/firebase';


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({name: 'Elon'})
    
    useEffect(() => {
        userObserver();
    },[])
    
    return(
        <AuthContext.Provider value={{currentUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

