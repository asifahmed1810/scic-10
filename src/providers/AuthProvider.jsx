import React, { createContext, useState } from 'react';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext(null);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const authInfo={
        googleSignIn
    }
    return <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
};

export default AuthProvider;