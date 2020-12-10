import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from './index'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https:/someimage"
        title="Won games"
        subtitle="Subtitle"
        buttonLabel="Buy now"
        buttonLink="https:/somebuttonlink"
      />
    )

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
