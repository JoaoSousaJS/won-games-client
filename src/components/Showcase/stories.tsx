import { Story, Meta } from '@storybook/react/types-6-0'
import highlightMocks from 'components/Highlight/mock'
import gamesMocks from 'components/GameCardSlider/mock'

import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layour: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Basic.args = {
  title: 'Most Popular',
  highlight: highlightMocks,
  games: gamesMocks
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutTitle.args = {
  highlight: highlightMocks,
  games: gamesMocks
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMocks
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMocks
}
