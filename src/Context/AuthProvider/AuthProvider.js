import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(false);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    // Create User By Using Gmail-Password
    const createUser = (gmail, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, gmail, password);
    }


    // Sign-In By Using Gmail-Password
    const loginUser = (gmail, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, gmail, password);
    }

    // Sign-Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // Sign-In With Google Pop-Up
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Sign-In With GitHub Pop-Up
    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Sign-In With Facebook Pop-Up
    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    // Set User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            if (user === null || loggedUser.emailVerified) {
                setUser(loggedUser);
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, []);

    const authInfo = { user, signInWithGoogle, signInWithGitHub, signInWithFacebook, createUser, loginUser, logOut, theme, setTheme, loading, setLoading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


}




export default AuthProvider;
