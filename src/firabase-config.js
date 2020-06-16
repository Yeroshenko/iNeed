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

firebase.auth().languageCode = 'ru'

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()