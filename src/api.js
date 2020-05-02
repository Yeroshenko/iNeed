import { db } from './firabase'

export const get = (collection) => {
  return db.collection(collection)
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      return items
    })
    .catch(error => {
      console.log('Error getting documents: ', error)
    })
}