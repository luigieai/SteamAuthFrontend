import { FC } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Spinner } from '@/components'

const RouterStack = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        lazy={async () => {
          //const { Home } = await import('@/pages/Home')
          const { Layout } = await import('@/pages/Layout')
          return {
            Component: Layout,
          }
        }}
      >
        <Route
          index
          lazy={async () => {
            const { Home } = await import('@/pages/Home')
            //const { Layout } = await import('@/pages/Layout')
            return {
              Component: Home,
            }
          }}
        />
      </Route>

      <Route
        path="/login"
        lazy={async () => {
          const { LoginPage } = await import('@/pages/Login')
          return {
            Component: LoginPage,
          }
        }}
      />

      <Route
        path="*"
        lazy={async () => {
          const { NotFound } = await import('@/pages/NotFound')
          return {
            Component: NotFound,
          }
        }}
      />
    </>,
  ),
)

const Routes: FC = () => {
  return <RouterProvider router={RouterStack} fallbackElement={<Spinner />} />
}

export { Routes }
