import { useState } from 'react'

import { Button, ButtonProps } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'

import { useGetTotpCode } from '@/services/SteamAccount/steamservice'

interface ButtonCopyCodeProps extends ButtonProps {
  username: string
}

function ButtonCopyCode({ username, ...props }: ButtonCopyCodeProps) {
  const { refetch, isRefetching } = useGetTotpCode(username, false) //Here we don't automatically fetch the codes until specified

  const [error, setError] = useState(false)

  const clipboard = useClipboard({ timeout: 1500 })

  const getTotpFromApi = async () => {
    if (clipboard.copied) {
      return
    }
    const res = await refetch()
    if (res.isError || res.data?.length == 0) {
      setError(true)
    }
    clipboard.copy(res.data)
  }

  if (error) {
    return (
      <Button color={'red'} disabled>
        Error!
      </Button>
    )
  }
  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={getTotpFromApi}
      {...props}
      disabled={isRefetching}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  )
}

export { ButtonCopyCode }
