import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from './index'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
  })
})
