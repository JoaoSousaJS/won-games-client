import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = (args) => (
  <MediaMatch {...args}>Only on Deskop</MediaMatch>
)
