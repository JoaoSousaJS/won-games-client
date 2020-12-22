import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from './index'

describe('<FormSignUp />', () => {
  it('should render the fields name, email, password and password confirmation', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the sign up button', () => {
    renderWithTheme(<FormSignUp />)

    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the sign in link', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
