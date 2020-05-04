import { db } from 'firabase'

const get = (collection) => {
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

export const todosApi = {
  getAll() {
    return get('todos')
  },
  getOne(listId) {
    return db.collection('todos')
      .where('listId', '==', listId)
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
}

export const listsApi = {
  getAll() {
    return get('lists')
  }
}