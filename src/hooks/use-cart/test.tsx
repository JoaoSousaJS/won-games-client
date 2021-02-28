import { CartProvderProps, CartProvider, useCart } from '.'

import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'

describe('useCart', () => {
  it('should return items and its info if there are any in cart', () => {
    const wrapper = ({ children }: CartProvderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})
