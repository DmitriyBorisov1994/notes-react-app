import styled from 'styled-components'

export const StyledNote = styled.li`
list-style: none;
width:100%;
background-color:${props => props.currentTheme === 'light'
      ? props.theme.colors.accent.light
      : props.theme.colors.accent.dark};
color:${props => props.currentTheme === 'light'
      ? props.theme.colors.text.dark
      : props.theme.colors.text.light};
padding:.5rem;
border-radius:0.5rem;
`