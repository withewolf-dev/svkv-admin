import firebase from "firebase";
import {combineReducers, createStore} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBEw2d_ju3zf3hfhy-YczdK4ic2Y4VtKU",
    authDomain: "messenger-clone-b5122.firebaseapp.com",
    databaseURL: "https://messenger-clone-b5122.firebaseio.com",
    projectId: "messenger-clone-b5122",
    storageBucket: "messenger-clone-b5122.appspot.com",
    messagingSenderId: "184837274158",
    appId: "1:184837274158:web:b3aab6d301c611ceb1bdbf",
    measurementId: "G-1VS2LQTBFF"
};

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const initialState = {};
export const store = createStore(rootReducer, initialState);

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};
