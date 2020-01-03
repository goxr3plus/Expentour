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
    console.log('1. Added initial items to database')
  })
  .catch(ex => {
    console.log(ex)
  })

//-------------Remove-------------
database
  .ref('isSingle')
  .remove()
  .then(() => {
    console.log('2. Removed isSingle')
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
    console.log('3. Update Location/City')
  })
  .catch(ex => {
    console.log(ex)
  })

//-------------Fetch--------------------
database
  .ref('location/city')
  .once('value')
  .then(snapshot => {
    console.log('City: ', snapshot.val())
  })
  .catch(e => {})

//-------------Fetch SUBSCRIBE--------------------
const onValueChange = database.ref('location/country').on(
  'value',
  snapshot => {
    console.log('Country: => ', snapshot.val())
  },
  e => console.log('Error with data fetching: ', e)
)

//-------------Fetch UNSUBSCRIBE--------------------
// onValueChange.off()

database.ref('notes').push({
  title: 'First Note',
  body: 'This is my note'
})
database.ref('notes').push({
  title: 'Second Note',
  body: 'This is my note'
})

//---- FETCH + SUBSCRIBE ----
const notesSubscription = database.ref('notes').on(
  'value',
  snapshot => {
    const notes = []

    snapshot.forEach(note => {
      notes.push({ id: note.key, ...note.val() })
    })

    console.log('Notes =>', notes)
  },
  e => console.log('Error with data fetching: ', e)
)

//child_removed
const noteDeleted = database.ref('notes').on('child_removed', snapshot => {
  console.log('Removed =>', snapshot.key, snapshot.val())
})

//child_removed
const noteChanged = database.ref('notes').on('child_changed', snapshot => {
  console.log('Changed =>', snapshot.key, snapshot.val())
})

//child_added
const noteAdded = database.ref('notes').on('child_added', snapshot => {
  console.log('Added =>', snapshot.key, snapshot.val())
})

//--- FETCH - NO SUBSCRIBE ----
// database.ref('notes').once('value', snapshot => {
//   const notes = []

//   snapshot.forEach(note => {
//     notes.push({ id: note.key, ...note.val() })
//   })

//   console.log(notes)
// })
