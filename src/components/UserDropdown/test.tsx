import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import UserDropdown from './index'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="test" />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="test" />)

    userEvent.click(screen.getByText(/test/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()
  })
})
