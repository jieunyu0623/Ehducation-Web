import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { firebaseConfig, uiConfig } from '../../firebase';

const Login = () => {

    return (
        <div>
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default Login
