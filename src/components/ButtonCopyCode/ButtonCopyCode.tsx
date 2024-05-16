import { Button, CopyButton } from '@mantine/core'

function ButtonCopyCode({ ...props }) {
  return (
    <CopyButton value="TODO!">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} {...props} onClick={copy}>
          {copied ? 'Copied TOTP' : 'Copy TOTP Code'}
        </Button>
      )}
    </CopyButton>
  )
}

export { ButtonCopyCode }
