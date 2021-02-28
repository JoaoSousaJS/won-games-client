import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

export type CartContextdata = {
  items: string[]
}

export const CartContextDefaultValues = {
  items: []
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

  return (
    <CartContext.Provider
      value={{
        items: cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
