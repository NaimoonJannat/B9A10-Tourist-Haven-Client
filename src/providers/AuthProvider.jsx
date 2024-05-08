import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const providerGit = new GithubAuthProvider();
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    
    const signInGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    const signInGithub = () =>{
        return signInWithPopup(auth, providerGit);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =
        onAuthStateChanged(auth, currentUser=>{
            console.log('user in the change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo ={
        user, 
        createUser,
        logOut,
        signIn,
        signInGoogle,
        signInGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;