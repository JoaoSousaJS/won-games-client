import { Divider } from 'components/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailProps
  upcomingTitle?: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendGames: GameCardProps[]
  recommendedTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingTitle,
  upcomingHighlight,
  recommendGames,
  recommendedTitle
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>
      <Showcase
        title={upcomingTitle || 'Upcoming games'}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendGames}
      />
    </S.Main>
  </Base>
)

export default Game
