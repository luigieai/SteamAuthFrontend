import { FC } from 'react'

import { Container, Table, Title } from '@mantine/core'

import { Spinner } from '@/components'
import { useGetAllAccounts } from '@/services/SteamAccount/steamservice'

const Home: FC = (): JSX.Element => {
  //const [accounts, setAccounts] = useState<SteamAccountsAllDto>()

  const { data, isPending, error } = useGetAllAccounts()

  if (isPending) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <div>Deu erro carai {error.stack}</div>
  }

  if (!data) {
    return <div>Api lixo</div>
  }
  const rows = data.steamAccounts.map((account) => (
    <Table.Tr key={account.accountName}>
      <Table.Td>{account.id}</Table.Td>
      <Table.Td>{account.accountName}</Table.Td>
    </Table.Tr>
  ))
  return (
    <Container fluid>
      <Title mb={'lg'}>Accounts</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Name</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows || <div></div>}</Table.Tbody>
      </Table>
    </Container>
  )
}

export { Home }
