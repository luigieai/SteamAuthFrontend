import { JSX } from 'react'
import { useAuth } from 'react-oidc-context'
import { Outlet } from 'react-router-dom'

import { AppShell, Burger, Group, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout } from '@tabler/icons-react'

const Layout = (): JSX.Element => {
  const [opened, { toggle }] = useDisclosure()
  const auth = useAuth()

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>
    case 'signoutRedirect':
      return <div>Signing you out...</div>
  }

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>
  }
  if (!auth.isAuthenticated) {
    auth.signinRedirect()
    return <div>Autentica porra</div>
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding={'md'}
    >
      <AppShell.Header>
        <Group h="100%" px={'md'}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={'sm'} />
          <div>Logo</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Menu
        <NavLink
          href="/logout"
          label="Logout"
          leftSection={<IconLogout size={'1rem'} stroke={1.5} />}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export { Layout }
