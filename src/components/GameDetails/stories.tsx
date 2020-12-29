import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: {
    platforms: ['windows', 'linux', 'mac'],
    releaseDate: '2020-11-21T23:00:00',
    developer: 'Different Tales'
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
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
