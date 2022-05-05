import styled from 'styled-components'
import { StyledTextarea } from './StyledTextarea'

export const StyledNoteTextarea = styled.textarea`
resize:none;
padding:.5rem;
border-radius:0.5rem;
width:100%;
min-height:100px;
border:none;
outline:none;
background:transparent;
color:${props => props.currentTheme === 'light'
            ? props.theme.colors.text.dark
            : props.theme.colors.text.light};
`