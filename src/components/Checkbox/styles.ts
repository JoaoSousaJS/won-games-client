import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.main``

export const label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
