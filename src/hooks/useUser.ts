import { USERCONTEXT } from '@/context/UserProvider'
import { useContext } from 'react'

const useUser = () => {
  const user = useContext(USERCONTEXT)
  if (user) return user
  else undefined
}

export default useUser
