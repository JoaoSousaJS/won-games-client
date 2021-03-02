import { Story, Meta } from '@storybook/react/types-6-0'
import { CartContextdata } from 'hooks/use-cart'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Basic: Story<GameInfoProps> = (args) => <GameInfo {...args} />

export const isInCart: Story<GameInfoProps & CartContextdata> = (args) => (
  <GameInfo {...args} />
)

isInCart.args = {
  isInCart: () => true
}
