import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <input id={labelFor} type="checkbox" />
    {!!label && (
      <S.label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.label>
    )}
  </S.Wrapper>
)

export default Checkbox
