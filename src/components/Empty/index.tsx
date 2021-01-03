import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
}

const Empty = ({ title, description }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A gamer in a couch paying videogame"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Empty
