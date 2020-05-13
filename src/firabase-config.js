import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBHmUIczHOcuJy9VXDIlv02lM6HxLPjPmY',
  authDomain: 'todolistmania.firebaseapp.com',
  databaseURL: 'https://todolistmania.firebaseio.com',
  projectId: 'todolistmania',
  storageBucket: 'todolistmania.appspot.com',
  messagingSenderId: '398709431423',
  appId: '1:398709431423:web:4f33b4a29ea01b6c96334a'
})

export const db = firebase.firestore()
export const auth = firebase.auth()