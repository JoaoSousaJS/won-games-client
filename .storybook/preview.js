import {ThemeProvider} from 'styled-components'
import {CartContext, CartContextDefaultValues} from 'hooks/use-cart' 
import {GlobalStyles} from 'styles/global'
import theme from 'styles/theme'
import { RouterContext } from  'next/dist/next-server/lib/router-context';  

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.black,
      },
    ],
  },
};

export const decorators = [
  (Story, context) => (
    <RouterContext.Provider value={{
      push: () => Promise.resolve(),
      replace: () => Promise.resolve(),
      prefetch: () => Promise.resolve()
    }}>  
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{
        ...CartContextDefaultValues,
        ...(context?.args?.cartContextValue || {}),
        ...context.args
      }}>
        <GlobalStyles removeBg/>
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
    </RouterContext.Provider>
  )
]


