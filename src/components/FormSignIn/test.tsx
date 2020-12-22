import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from './index'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password?/i })
    ).toBeInTheDocument()
  })

  it('should render the text to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/do not have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/sign-up'
    )
  })
})
