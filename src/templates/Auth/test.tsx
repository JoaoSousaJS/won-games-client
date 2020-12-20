import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from './index'

describe('<Auth />', () => {
  it('should render the logos, title, subtitle, footer and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByLabelText(/Won Games/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/auth title/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/Won Games 2020/i)).toBeInTheDocument()
  })
})
