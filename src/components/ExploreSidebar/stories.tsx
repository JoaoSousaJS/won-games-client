import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar, { ExploreSideBarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  args: {
    items
  },
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<ExploreSideBarProps> = (args) => (
  <ExploreSidebar {...args} />
)
