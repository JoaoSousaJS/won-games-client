import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar
} as Meta

export const Basic: Story = (args) => <ExploreSidebar {...args} />
