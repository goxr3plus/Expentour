import * as firebase from 'firebase'

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
database.ref().set({
  name: 'GOXR3PLUS STUDIO',
  age: 26,
  isSingle: true,
  location: {
    city: 'Florida',
    country: 'United States'
  }
})

// database.ref().set('This is my data')

database.ref('age').set(28)
database.ref('location/city').set('California')

database.ref('attributes').set({
  height: 73,
  weight: 180
})
