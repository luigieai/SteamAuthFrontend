import { useAuth } from 'react-oidc-context'
import { Navigate } from 'react-router-dom'

import { Button, Center, Flex, Image } from '@mantine/core'

import { empresa } from '@/assets'

const LoginPage = () => {
  const { isAuthenticated, signinRedirect } = useAuth()
  if (isAuthenticated) {
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <Center maw="100%" h="100vh" bg="var(--mantine-color-gray-light)">
      <Flex direction={'column'} justify={'space-between'} align={'center'} gap="md">
        <Image radius="md" src={empresa} fit="scale-down" />
        <Flex direction={'row'} justify={'space-between'} align={'center'} gap={'md'}>
          <Button onClick={() => void signinRedirect()}>Log in</Button>
          <Button>Register</Button>
        </Flex>
      </Flex>
    </Center>
  )
}

export { LoginPage }
