import { useRef, useEffect } from 'react'

export const useOutsideClick = (ref, callback, when) => {
  const savedCallback = useRef(callback)

  useEffect(() => savedCallback.current = callback )

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        savedCallback.current()
      }
    }

    if (when) {
      document.addEventListener('click', handler)
      return () => document.removeEventListener('click', handler)
    }
  }, [when, ref])
}