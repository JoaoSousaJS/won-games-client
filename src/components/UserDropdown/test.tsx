import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from './index'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="test" />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="test" />)

    expect(screen.getByText(/My profile/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument()
  })
})
