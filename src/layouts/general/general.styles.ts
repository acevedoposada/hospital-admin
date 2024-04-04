import { makeStyles, tokens, typographyStyles } from '@fluentui/react-components'
import tw from 'twin.macro'

export const useStyles = makeStyles({
  layout: {
    ...tw`w-full h-screen flex`
  },
  container: {
    ...tw`absolute top-0 left-0 pb-16 md:pb-0 h-full w-full flex`
  },
  content: {
    ...tw`flex flex-col relative`,
    'box-shadow': '0 0 1rem rgba(0, 0, 0, 0.6)'
  },
  navbar: {
    "border-color": tokens.colorNeutralBackground2Pressed,
    ...tw`h-16 flex items-center justify-between px-4 w-full border-b`
  },
  title: {
    ...typographyStyles.subtitle2Stronger,
    'font-size': '1.1rem'
  },
  'notifications-btn': {
    ...tw`min-w-[auto] h-full hidden md:inline-flex`
  }
})