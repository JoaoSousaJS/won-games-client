import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
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

export const Basic: Story = (args) => <GameDetails {...args} />
