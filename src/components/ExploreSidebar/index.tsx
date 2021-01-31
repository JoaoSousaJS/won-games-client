import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox name="under-50" label="Under $50" labelFor="under-50" />
    <Checkbox name="under-100" label="Under $100" labelFor="under-100" />
    <Checkbox name="under-150" label="Under $150" labelFor="under-150" />
    <Checkbox name="under-200" label="Under $200" labelFor="under-200" />
    <Checkbox name="free" label="Free" labelFor="free" />
    <Checkbox name="discounted" label="Discounted" labelFor="discounted" />
    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
    <Radio
      id="high-to-low"
      name="sort-by"
      label="High to low"
      labelFor="high-to-low"
      value="high-to-low"
    />
    <Radio
      id="low-to-high"
      name="sort-by"
      label="Low to high"
      labelFor="low-to-high"
      value="low-to-high"
    />
    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
  </S.Wrapper>
)

export default ExploreSidebar
