import { CartProvderProps, CartProvider, useCart } from '.'

import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'
import { cartItems, gamesMock } from './mock'
import { MockedProvider } from '@apollo/client/testing'

describe('useCart', () => {
  it('should return items and its info if there are any in cart', async () => {
    const wrapper = ({ children }: CartProvderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.quantity).toBe(2)
  })
})
