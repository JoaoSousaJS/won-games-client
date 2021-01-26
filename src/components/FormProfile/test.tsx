import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from './index'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()
  })
})
