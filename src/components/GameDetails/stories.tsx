import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Platform']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Basic: Story<GameDetailProps> = (args) => <GameDetails {...args} />
