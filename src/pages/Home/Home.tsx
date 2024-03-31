import { FC, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import { useNavigate } from 'react-router-dom'

import { Container, Table, Title } from '@mantine/core'

import { useAuthenticatedUser } from '@/hooks'
import { Layout } from '@/pages/Layout'

const accounts = [
  { primeiro: 'Ai ai Ai', segundo: '666', terceiro: 'A', quarto: 'Carbon' },
  { primeiro: 'Ei ei ei', segundo: '366', terceiro: 'B', quarto: 'Glass' },
  { primeiro: 'Ii ii ii', segundo: '636', terceiro: 'C', quarto: 'Wood' },
  { primeiro: 'Oi oi oi', segundo: '663', terceiro: 'D', quarto: 'Stone' },
  { primeiro: 'Ui ui ui', segundo: '363', terceiro: 'E', quarto: 'Brick' },
]

const Home: FC = (): JSX.Element => {
  const isAuthenticated = useAuthenticatedUser()
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [auth, navigate, isAuthenticated])

  const rows = accounts.map((account) => (
    <Table.Tr key={account.primeiro}>
      <Table.Td>{account.primeiro}</Table.Td>
      <Table.Td>{account.segundo}</Table.Td>
      <Table.Td>{account.terceiro}</Table.Td>
      <Table.Td>{account.quarto}</Table.Td>
    </Table.Tr>
  ))
  return (
    <Layout>
      <Container fluid>
        <Title mb={'lg'}>Accounts</Title>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Primeiro</Table.Th>
              <Table.Th>Segundo</Table.Th>
              <Table.Th>Terceiro</Table.Th>
              <Table.Th>Quarto</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </Layout>
  )
}

export { Home }
