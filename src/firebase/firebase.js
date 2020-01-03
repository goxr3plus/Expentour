import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmVkg-eqkPNtQfDIgDydILOWB58NKKi58',
  authDomain: 'expentour-c7c8f.firebaseapp.com',
  databaseURL: 'https://expentour-c7c8f.firebaseio.com',
  projectId: 'expentour-c7c8f',
  storageBucket: 'expentour-c7c8f.appspot.com',
  messagingSenderId: '671256078546',
  appId: '1:671256078546:web:55f305bbd16a30f1f2e50b',
  measurementId: 'G-S5PELDGMQ1'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
