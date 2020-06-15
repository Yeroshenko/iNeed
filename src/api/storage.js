import { storage } from 'firabase-config'

export const storageApi = {
  uploadAvatar(avatarName, avatar) {
    return storage.ref(`userAvatars/${avatarName}`).put(avatar)
  },
  getAvatar(avatarName) {
    return storage.ref('userAvatars').child(avatarName).getDownloadURL()
  }
}