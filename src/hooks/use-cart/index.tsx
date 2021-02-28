import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/format-price'
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
  total: string
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00'
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

  const total =
    data?.games.reduce((acc, games) => {
      return acc + games.price
    }, 0) || 0

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
