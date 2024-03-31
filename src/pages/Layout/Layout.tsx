import { JSX } from 'react'

import { AppShell, Burger, Group, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout } from '@tabler/icons-react'

const Layout = (props: { children: JSX.Element }): JSX.Element => {
  const [opened, { toggle }] = useDisclosure()

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

      <AppShell.Main>{props.children || <div>Cu</div>}</AppShell.Main>
    </AppShell>
  )
}

export { Layout }
