import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplatesProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
  newGamesTitle: string
  mostPopularGamesTitle: string
  upcomingGamesTitle: string
  freeGamesTitle: string
}

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularGames,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  mostPopularHighlight,
  upcommingGames,
  freeGamesTitle,
  upcommingHighlight,
  freeGames,
  freeHighlight
}: HomeTemplatesProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
