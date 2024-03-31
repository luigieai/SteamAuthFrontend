import { AppShell, Burger, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout } from '@tabler/icons-react'

const Layout = () => {
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
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={'sm'} />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Menu
        <NavLink
          href="/logout"
          label="Logout"
          leftSection={<IconLogout size={'1rem'} stroke={1.5} />}
        />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export { Layout }
