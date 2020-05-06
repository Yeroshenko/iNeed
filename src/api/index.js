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
  },
  create(data) {
    return db.collection('todos')
      .add({ ...data, completed: false })
      .then(docRef => docRef.get())
      .then(doc => ({
        id: doc.id,
        ...doc.data()
      })) 
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  },
  delete(itemId) {
    return db.collection('todos').doc(itemId).delete()
      .then(() => itemId)
      .catch(error => {
        console.error('Error removing document: ', error)
      })
  },
  update(itemId, data) {
    return db.collection('todos').doc(itemId).update(data)
      .catch(error => {
        console.error('Error updating document: ', error)
      })
  }
}

export const listsApi = {
  getAll() {
    return get('lists')
  }
}