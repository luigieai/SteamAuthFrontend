import { useAuth } from 'react-oidc-context'

const useAuthenticatedUser = () => {
  const auth = useAuth()
  if (!auth.isLoading && !auth.isAuthenticated) {
    return false
  }
  return true
}

export { useAuthenticatedUser }
