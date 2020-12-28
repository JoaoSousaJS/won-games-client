import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'GameInfo',
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
