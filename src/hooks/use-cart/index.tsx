import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextdata = {
  items: CartItem[]
  quantity: number
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0
}

export const CartContext = createContext<CartContextdata>(
  CartContextDefaultValues
)
export type CartProvderProps = {
  children: React.ReactNode
}
const CartProvider = ({ children }: CartProvderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data } = useQueryGames({
    variables: {
      where: {
        id: cartItems
      }
    },
    skip: !cartItems?.length
  })

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
