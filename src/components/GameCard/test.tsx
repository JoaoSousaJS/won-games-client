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
})
