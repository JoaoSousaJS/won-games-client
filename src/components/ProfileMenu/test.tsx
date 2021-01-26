import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from './index'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByText('My Profile')).toBeInTheDocument()
    expect(screen.getByText('My cards')).toBeInTheDocument()
    expect(screen.getByText('My Orders')).toBeInTheDocument()
    expect(screen.getByText('Signout')).toBeInTheDocument()
  })
})
