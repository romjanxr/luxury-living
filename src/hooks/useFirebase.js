import initializeAuthentication from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then()
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => { })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => { })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return subscribe;
    }, [auth])

    return {
        user,
        error,
        isLoading,
        registerUser,
        loginUser,
        googleSignIn,
        logOut
    }
};

export default useFirebase;