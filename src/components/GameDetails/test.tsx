import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from './index'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails />)
  })
})
