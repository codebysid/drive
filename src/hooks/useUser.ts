import { USERCONTEXT } from '@/context/UserProvider'
import { useContext } from 'react'

const useUser = () => {
  const user = useContext(USERCONTEXT)
  return user?.user
}

export default useUser
