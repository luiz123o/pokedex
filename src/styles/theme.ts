import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'

export default extendTheme({
  colors: {
    grass: theme.colors.green,
    electric: theme.colors.yellow,
    fire: theme.colors.orange,
    water: theme.colors.blue,
    psychic: theme.colors.purple,
    normal: theme.colors.gray,
    bug: {
      '600': ' #7F8C24'
    }
  }
})
