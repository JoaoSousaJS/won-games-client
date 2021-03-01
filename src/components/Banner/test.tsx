import { render, screen } from 'utils/test-utils'
import Banner from './index'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(
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

  it('should render a ribbon', () => {
    render(
      <Banner
        img="https:/someimage"
        title="Won games"
        subtitle="Subtitle"
        buttonLabel="Buy now"
        buttonLink="https:/somebuttonlink"
        ribbon="My ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
