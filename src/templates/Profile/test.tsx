import { renderWithTheme } from 'utils/tests/helpers'

import Profile from './index'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Profile>a</Profile>)
  })
})
