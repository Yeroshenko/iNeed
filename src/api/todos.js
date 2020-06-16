import { db } from 'firabase-config'

export const todosApi = {
  getAll(uid) {
    return db.collection('todos')
      .get()
      .then(snapshot => {
        const items = snapshot.docs
          .filter(doc => doc.data().uid === uid)
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
        return items
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
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
      .add({
        ...data,
        completed: false,
        important: false,
        createdAt: new Date()
      })
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