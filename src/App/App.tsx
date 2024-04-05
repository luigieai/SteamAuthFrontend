import {
  AuthProvider,
  ErrorBoundaryProvider,
  NotificationProvider,
  QueryProvider,
  ThemeProvider,
} from '@/providers'
import { Routes } from '@/routes'

const App = () => {
  return (
    <ErrorBoundaryProvider>
      <ThemeProvider>
        <NotificationProvider>
          <QueryProvider>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </QueryProvider>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundaryProvider>
  )
}

export { App }
