import { db } from 'firabase-config'

export const listsApi = {
  getAll(uid) {
    return db
      .collection('lists')
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
  create(data) {
    return db
      .collection('lists')
      .add({ ...data, createdAt: new Date() })
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
