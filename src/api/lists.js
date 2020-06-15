import { db } from 'firabase-config'

export const listsApi = {
  getAll() {
    return db
      .collection('lists')
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
    return db
      .collection('lists')
      .add({
        ...data
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
  delete(listId) {
    return db
      .collection('lists')
      .doc(listId)
      .delete()
      .then(() => listId)
      .catch(error => {
        console.error('Error removing document: ', error)
      })
  },
  update(listId, data) {
    return db
      .collection('lists')
      .doc(listId)
      .update(data)
      .catch(error => {
        console.error('Error updating document: ', error)
      })
  }
}
