import { FC } from 'react'

import { Button, Container, Table, Title } from '@mantine/core'
import { IconEdit, IconEye } from '@tabler/icons-react'

import { Spinner } from '@/components'
import { ButtonCopyCode } from '@/components/ButtonCopyCode'
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
      <Table.Td>
        <ButtonCopyCode variant="filled" size="compact-sm" radius="md" />
      </Table.Td>
      <Table.Td>
        <Button rightSection={<IconEye size={18} />} variant="filled" size="compact-sm" radius="md">
          View
        </Button>
      </Table.Td>
      <Table.Td>
        <Button
          rightSection={<IconEdit size={18} />}
          variant="filled"
          size="compact-sm"
          radius="md"
        >
          Edit
        </Button>
      </Table.Td>
    </Table.Tr>
  ))
  return (
    <Container fluid>
      <Title mb={'lg'}>Accounts</Title>
      <Table striped>
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
