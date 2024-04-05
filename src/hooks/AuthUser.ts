import { User } from 'oidc-client-ts'

const AuthUser = () => {
  const oidcStorage = sessionStorage.getItem(
    'oidc.user:https://keycloak.lab.marioverde.com.br/realms/SteamAuth:steam-auth-frontend',
  )
  if (!oidcStorage) {
    return null
  }

  return User.fromStorageString(oidcStorage)
}

export { AuthUser }
