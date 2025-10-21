import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

      const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);
    };

    const Login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const Logout =()=>{
        return signOut(auth)
    }
    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser);
           setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])
    const AuthData = {
        user,
        setUser,
        createUser,
        Logout,
        Login,
        loading,
        setLoading,
        updateUser
    };

    return (
        <AuthContext.Provider value={AuthData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
