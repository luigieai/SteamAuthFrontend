import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'

import { App } from '@/App'

const root = createRoot(document.getElementById('root') as HTMLElement)

const oidcConfig = {
  authority: 'https://keycloak.lab.marioverde.com.br/realms/SteamAuth',
  client_id: 'steam-auth-frontend',
  redirect_uri: 'http://localhost:4000/',
}

if (import.meta.env.MODE === 'test') {
  import('@/__mocks__/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(
        <AuthProvider {...oidcConfig}>
          <StrictMode>
            <App />
          </StrictMode>
        </AuthProvider>,
      )
    })
} else {
  root.render(
    <AuthProvider {...oidcConfig}>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthProvider>,
  )
}

// Uncomment if you want to see the Lighthouse report in the console
// import reportWebVitals from './reportWebVitals'
// reportWebVitals(console.log)
