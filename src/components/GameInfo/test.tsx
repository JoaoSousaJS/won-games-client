import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from './index'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
  })

  it('should render button', () => {
    renderWithTheme(<GameInfo {...props} />)
  })
})
