import { MantineColorsTuple, createTheme } from '@mantine/core'

const green: MantineColorsTuple = [
  '#e5feee',
  '#d2f9e0',
  '#a8f1c0',
  '#7aea9f',
  '#53e383',
  '#3bdf70',
  '#2bdd66',
  '#1ac455',
  '#0caf49',
  '#00963c',
]

const theme = createTheme({
  focusRing: 'never',
  scale: 1,
  primaryColor: 'green',
  colors: {
    green,
  },
})

export { theme }
