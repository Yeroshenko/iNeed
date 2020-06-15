import { auth } from 'firabase-config'

export const authApi = {
  register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(res => ({ email: res.user.email, id: res.user.uid }))
      .catch(error => error)
  },
  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
      .then(res => ({ email: res.user.email, id: res.user.uid }))
      .catch(error => error)
  },
  logout() {
    return auth.signOut()
  },
  updateUser(newInfo) {
    return auth.currentUser.updateProfile(newInfo)
  }
}