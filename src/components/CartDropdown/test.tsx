import CartDropdown from './index'

import items from 'components/CartList/mock'
import { render, screen } from 'utils/test-utils'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown items={items} total={'$300.00'} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    render(<CartDropdown items={items} total={'$300.00'} />)

    expect(screen.getByText('$300.00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
