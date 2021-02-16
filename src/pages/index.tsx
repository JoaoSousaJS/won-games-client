import Home, { HomeTemplatesProps } from 'templates/Home'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplatesProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })
  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon?.text,
          ribbonColor: banner.ribbon?.color,
          ribbonSize: banner.ribbon?.size
        })
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMock,
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcommingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcommingHighlight: highlightMock,
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeHighlight: highlightMock
    }
  }
}
