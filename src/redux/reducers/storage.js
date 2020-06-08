import { compressionFromAvatar } from 'utils'
import { storageApi } from 'api'

const SET_CURRENT_AVATAR = 'STORAGE:SET_CURRENT_AVATAR'
const SET_IS_UPLOADING = 'STORAGE:SET_IS_UPLOADING'

const initialState = {
  currentAvatar: null,
  isUploading: false
}

export default function storageReducer(state = initialState, action) {
  switch (action.type) {

    case SET_IS_UPLOADING:
      return {
        ...state,
        isUploading: action.isUploading
      }

    case SET_CURRENT_AVATAR:
      return {
        ...state,
        currentAvatar: action.currentAvatar
      }

    default:
      return state
  }
}

// Actions creators
export const setUploading = (isUploading) => ({ type: SET_IS_UPLOADING, isUploading })
export const setCurrentAvatar = (currentAvatar) => ({ type: SET_CURRENT_AVATAR, currentAvatar})


// Thank creators
export const uploadAvatar = (photo) => async (dispatch) => {
  dispatch(setUploading(true))

  const avatar = await compressionFromAvatar(photo)
  await storageApi.uploadAvatar(avatar.name, avatar)

  const url = await storageApi.getAvatar(avatar.name)

  dispatch(setCurrentAvatar(url))
  dispatch(setUploading(false))
}
