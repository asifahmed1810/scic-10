import React, { createContext, useEffect, useState } from 'react';

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';



export const AuthContext = createContext(null);

const googleProvider=new GoogleAuthProvider();
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo={
        user,
        googleSignIn
    }


    return <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
};

export default AuthProvider;