import Game, { GameTemplateProps } from 'templates/Game'
import galleryMock from 'components/Gallery/mock'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover: '/img/games/cyberpunk-1.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in night city, a megalopis obessed with power, glamour and body modification. You play as V, mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      },
      gallery: galleryMock
    }
  }
}
