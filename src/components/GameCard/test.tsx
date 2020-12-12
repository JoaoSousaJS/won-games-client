import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from './index'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar games',
  img:
    'https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg?t=1607696821',
  price: 'AUD 235.00'
}

describe('<GameCard />', () => {
  it('should render the game card', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toHaveAttribute('src', props.img)

    expect(screen.getByText(/AUD 235.00/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(/AUD 235.00/i)).not.toHaveAttribute(
      'text-decoration',
      'line-through'
    )
    expect(screen.getByText(/AUD 235.00/i)).not.toHaveAttribute(
      'color',
      '#8F8F8F'
    )

    expect(screen.getByText(/AUD 235.00/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="true" {...props} />)

    expect(screen.getByText(/AUD 235.00/i)).toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
