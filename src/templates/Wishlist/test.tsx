import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist from './index'

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist />)
  })
})
