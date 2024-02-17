import { useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import { useNavigate } from 'react-router-dom'

import { Button, Center, Flex, Image } from '@mantine/core'

import { empresa } from '@/assets'

const LoginPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.isLoading && auth.isAuthenticated) {
      navigate('/')
    }
  }, [auth, navigate])

  return (
    <Center maw="100%" h="100vh" bg="var(--mantine-color-gray-light)">
      <Flex direction={'column'} justify={'space-between'} align={'center'} gap="md">
        <Image radius="md" src={empresa} fit="scale-down" />
        <Flex direction={'row'} justify={'space-between'} align={'center'} gap={'md'}>
          <Button onClick={() => void auth.signinRedirect()}>Log in</Button>
          <Button>Register</Button>
        </Flex>
      </Flex>
    </Center>
  )
}

export { LoginPage }
