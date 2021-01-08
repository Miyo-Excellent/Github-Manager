import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCa9GVFd5D-7gyy3VLlMlOsvTvilrZodn0',
  authDomain: 'github-app-e9d62.firebaseapp.com',
  databaseURL: 'https://github-app-e9d62-default-rtdb.firebaseio.com',
  projectId: 'github-app-e9d62',
  storageBucket: 'github-app-e9d62.appspot.com',
  messagingSenderId: '51637329527',
  appId: '1:51637329527:web:2ddf57880c13e3bb0b3072',
  measurementId: 'G-2985JXBMZE',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database, firebase, googleAuthProvider };
