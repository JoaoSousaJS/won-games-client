import Heading from 'components/Heading'
import * as S from './styles'

export type GameInfoProps = {
  title: string
}

const GameInfo = ({ title }: GameInfoProps) => (
  <S.Wrapper>
    <Heading>{title}</Heading>
  </S.Wrapper>
)

export default GameInfo
