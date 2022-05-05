import styled from 'styled-components'
import { StyledTextarea } from './StyledTextarea'

export const StyledNoteTextarea = styled(StyledTextarea)`
min-height:100px;
background:transparent;
color:${props => props.currentTheme === 'light'
      ? props.theme.colors.text.dark
      : props.theme.colors.text.light};
`