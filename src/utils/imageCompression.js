import imageCompression from 'browser-image-compression'

export const compressionFromAvatar = async (imageFile) => {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 512,
    useWebWorker: true
  }

  return await imageCompression(imageFile, options)
}