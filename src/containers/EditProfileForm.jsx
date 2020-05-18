import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'

import { uploadAvatar, setCurrentAvatar } from 'redux/reducers/storage'
import { setUserInfo, updateUserInfo } from 'redux/reducers/auth'
import { EditProfileForm } from 'components'

const EditProfileFormContainer = ({
  visible,
  toggleShowForm,
  currentAvatar,
  user,
  isUploading,
  uploadAvatar,
  setCurrentAvatar,
  updateUserInfo,
}) => {
  const [formInstance] = Form.useForm()

  const initialValues = ({ displayName: user.displayName })
  const initailAvatar = user.photoURL

  const clearAvalar = () => setCurrentAvatar(null)

  const submitModal = async () => {
    const values = await formInstance.validateFields()
    const fullValues = { ...values, photoURL: currentAvatar }
    const payload = {}

    for (let key in fullValues) {
      if (fullValues[key]) {
        payload[key] = fullValues[key]
      }
    }

    updateUserInfo(payload)
    toggleShowForm()
    clearAvalar()
  }

  const cancelModal = () => {
    toggleShowForm()
    clearAvalar()
  }

  return (
    <EditProfileForm
      visible={visible}
      formInstance={formInstance}
      cancelModal={cancelModal}
      currentAvatar={currentAvatar}
      isUploading={isUploading}
      initialValues={initialValues}
      initailAvatar={initailAvatar}
      uploadAvatar={uploadAvatar}
      clearAvalar={clearAvalar}
      submitModal={submitModal}
    />
  )
}

const mapStateToProps = state => ({
  currentAvatar: state.storage.currentAvatar,
  isUploading: state.storage.isUploading,
  user: state.auth.user
})

export default connect(mapStateToProps, {
  uploadAvatar,
  setCurrentAvatar,
  setUserInfo,
  updateUserInfo
})(EditProfileFormContainer)
