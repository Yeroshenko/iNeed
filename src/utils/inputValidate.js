export const required = (message) => ({ required: true, message })
export const min = (min, message) => ({ min, message })

export const confirm = (field, message) => ({ getFieldValue }) => ({
  validator(rule, value) {
    if (!value || getFieldValue(field) === value) {
      return Promise.resolve()
    }
    return Promise.reject(message)
  }
})