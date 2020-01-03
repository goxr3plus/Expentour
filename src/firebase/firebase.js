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

//-------------Set-------------
database
  .ref()
  .set({
    name: 'GOXR3PLUS STUDIO',
    age: 26,
    isSingle: true,
    job: 'Recruiter',
    location: {
      city: 'Florida',
      country: 'United States'
    }
  })
  .then(() => {
    console.log('First write to firebase success')
  })
  .catch(ex => {
    console.log(ex)
  })

//-------------Remove-------------
database
  .ref('isSingle')
  .remove()
  .then(() => {
    console.log('Removed isSingle')
  })
  .catch(ex => {
    console.log(ex)
  })
// database.ref('isSingle').set(null)

//-------------Update--------------------
database
  .ref()
  .update({
    name: 'Mike',
    job: 'Manager',
    'location/city': 'Boston'
  })
  .then(() => {
    console.log('Update Worked')
  })
  .catch(ex => {
    console.log(ex)
  })

//-------------Fetch--------------------
database
  .ref('location/city')
  .once('value')
  .then(snapshot => {
    console.log(snapshot.val())
  })
  .catch(e => {})

//-------------Fetch SUBSCRIBE--------------------
const onValueChange = database.ref('location/country').on('value', snapshot => {
  console.log(snapshot.val(), e => console.log('Error with data fetching: ', e))
})

//-------------Fetch UNSUBSCRIBE--------------------
// onValueChange.off()

//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
/** EXTRA EXAMPLES */
// database.ref().set('This is my data')
// database.ref('age').set(28)
// database.ref('location/city').set('California')

// database
//   .ref('attributes')
//   .set({
//     height: 74,
//     weight: 180
//   })
//   .then(() => {
//     console.log('la')
//   })
//   .catch(ex => {
//     console.log('O H NO DADDY')
//   })
