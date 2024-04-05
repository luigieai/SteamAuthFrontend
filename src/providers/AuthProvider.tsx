import { FC } from 'react'
import { AuthProviderProps, AuthProvider as Authy } from 'react-oidc-context'

type QueryProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const oidcConfig: AuthProviderProps = {
  authority: 'https://keycloak.lab.marioverde.com.br/realms/SteamAuth',
  client_id: 'steam-auth-frontend',
  redirect_uri: 'http://localhost:4000/',
}

const AuthProvider: FC<QueryProviderProps> = ({ children }) => {
  return <Authy {...oidcConfig}>{children}</Authy>
}

export { AuthProvider }
