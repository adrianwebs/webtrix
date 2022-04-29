import firebase, {initializeApp} from 'firebase/app'
import auth, {signInWithPopup, getAuth, FacebookAuthProvider, onAuthStateChanged, signOut, TwitterAuthProvider, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCNy3-kpbmr8rYZjPx9qwSA95qXTCiBFh8",
    authDomain: "webtrix-31386.firebaseapp.com",
    projectId: "webtrix-31386",
    storageBucket: "webtrix-31386.appspot.com",
    messagingSenderId: "1007307863568",
    appId: "1:1007307863568:web:6d4a430403b5b978cb7c95",
    measurementId: "G-TD4MR3NCYE"
};

initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
    const {displayName, email, photoURL} = user
    return {
        avatar: photoURL,
        username: displayName,
        email
    }
}

export const signOutUser = () => {
    return signOut(getAuth());
}

export const onAuthStateChangedUser = (onChange) => {
    return onAuthStateChanged(getAuth(), user => {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

        onChange(normalizedUser)
    })
}

export const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider()
    return signInWithPopup(getAuth(), facebookProvider)
}

export const loginWithTwitter = () => {
    const twitterProvider = new TwitterAuthProvider()
    return signInWithPopup(getAuth(), twitterProvider)
}

export const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(getAuth(), googleProvider)
}