import Game, { GameTemplateProps } from 'templates/Game'

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
        description: ''
      }
    }
  }
}
