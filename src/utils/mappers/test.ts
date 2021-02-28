import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import formatPrice from 'utils/format-price'
import { bannerMapper, cartMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: `http://localhost:1337/image.jpg`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ribbon: banner.ribbon?.text,
        ribbonColor: banner.ribbon?.color,
        ribbonSize: banner.ribbon?.size
      }
    ])
  })
})

describe('gamesMapper(', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })
  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: game.id,
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return the correct format when mapped', () => {
    const highlight = {
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      background: {
        url: '/image.jpg'
      },
      floatImage: {
        url: '/image2.jpg'
      },
      alignment: 'right',
      buttonLabel: 'button label',
      buttonLink: 'google.com'
    } as QueryHome_sections_freeGames_highlight
    expect(highlightMapper(highlight)).toStrictEqual({
      title: highlight!.title,
      subtitle: highlight!.subtitle,
      backgroundImage: `http://localhost:1337${highlight!.background?.url}`,
      floatImage: `http://localhost:1337${highlight!.floatImage?.url}`,
      buttonLabel: highlight!.buttonLabel,
      buttonLink: highlight!.buttonLink,
      alignment: highlight!.alignment
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const game = {
      id: '1',
      cover: {
        url: '/image.jpg'
      },
      name: 'game',
      price: 10
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: game.id,
        img: `http://localhost:1337${game.cover?.url}`,
        title: game.name,
        price: formatPrice(game.price)
      }
    ])
  })
})
