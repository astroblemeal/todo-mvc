// import firebase from 'firebase'

// const firebaseApp = firebase.initializeApp({
//   apiKey: 'AIzaSyBVSQdkHd9uWg9JCIZxmsPkxvPVwBPLG_8',
//   authDomain: 'todo-mvc-demo.firebaseapp.com',
//   projectId: 'todo-mvc-demo',
//   storageBucket: 'todo-mvc-demo.appspot.com',
//   messagingSenderId: '134881146188',
//   appId: '1:134881146188:web:d7d46b789f88f4d71fcbe9',
// })

// // console.log(process.env)

// const db = firebaseApp.firestore()
// // const auth = firebase.auth();
// // const storage = firebase.storage();

// export default db

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: '`${process.env.REACT_APP_FIREBASE_KEY}`',
  authDomain: 'todo-mvc-demo.firebaseapp.com',
  projectId: 'todo-mvc-demo',
  storageBucket: 'todo-mvc-demo.appspot.com',
  messagingSenderId: '134881146188',
  appId: '1:134881146188:web:d7d46b789f88f4d71fcbe9',
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
// const storage = firebase.storage();

export { db, auth }
