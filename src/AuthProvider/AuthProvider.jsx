import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // observe user
    const [user, setUser] = useState(null);
    // setting fake data
    const [fakeData, setFakeData] = useState();
    // creating user with email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // GOOGLE LOGIN 
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
    };
    // login with github
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        signInWithPopup(auth , githubProvider)
    }
    // sign in user with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };



    // log out
    const logOut = () => {
        signOut(auth)
    }

    // data.json
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(fake => setFakeData(fake));
    }, []);
    
    // observe the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    })
    //all context value
    const authInfo = { user, createUser,googleLogin,githubLogin, signInUser,logOut,fakeData};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;