
export const firebaseConfig = {
    apiKey: "AIzaSyAtIRZv9COOErnAL51Z9BMWdB3-x0c4Te8",
    authDomain: "ehducation-3.firebaseapp.com",
    databaseURL: "https://ehducation-3-default-rtdb.firebaseio.com",
    projectId: "ehducation-3",
    storageBucket: "ehducation-3.appspot.com",
    messagingSenderId: "786937482692",
    appId: "1:786937482692:web:2a3bf3d8d79e87ca8aa891"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};