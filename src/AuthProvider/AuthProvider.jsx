import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
// creating user with email and password 
const createUser = (email ,password) => {
   return createUserWithEmailAndPassword(auth, email, password);
}







//all context value
    const authInfo = { user , createUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;