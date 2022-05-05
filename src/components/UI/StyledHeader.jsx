import styled from 'styled-components'

export const StyledHeader = styled.header`
background-color:${props => props.currentTheme === 'light'
      ? props.theme.colors.component.light
      : props.theme.colors.component.dark};
box-shadow:0px 0px 6px ${props => props.theme.divider};
color:${props => props.currentTheme === 'light'
      ? props.theme.colors.text.dark
      : props.theme.colors.text.light};
`