import styled from 'styled-components'

export const StyledNote = styled.li`
list-style: none;
width:100%;
&:hover{box-shadow:0px 0px 6px ${props => props.theme.divider};}
background-color:${props => props.currentTheme === 'light'
            ? props.theme.colors.component.light
            : props.theme.colors.component.dark};
color:${props => props.currentTheme === 'light'
            ? props.theme.colors.text.dark
            : props.theme.colors.text.light};
padding:.5rem;
border-radius:0.5rem;
`