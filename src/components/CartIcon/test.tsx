import { render, screen } from 'utils/test-utils'

import CartIcon from './index'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart item/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<CartIcon quantity={3} />)

    expect(screen.getByLabelText(/cart item/i)).toBeInTheDocument()
    expect(screen.getByText(/3/i)).toBeInTheDocument()
  })

  it('should render with badge only if has positive numbers', () => {
    render(<CartIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart item/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-1/i)).not.toBeInTheDocument()
  })
})
