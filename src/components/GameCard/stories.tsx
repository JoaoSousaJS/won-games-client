import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar games',
    img:
      'https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg?t=1607696821',
    price: 'AUD 235.00',
    promotionalPrice: 'AUD 200.00'
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
