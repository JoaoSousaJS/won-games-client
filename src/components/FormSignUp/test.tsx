import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/test-utils'

import FormSignUp from './index'

describe('<FormSignUp />', () => {
  it('should render the fields name, email, password and password confirmation', () => {
    const { container } = render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the sign up button', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the sign in link', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
