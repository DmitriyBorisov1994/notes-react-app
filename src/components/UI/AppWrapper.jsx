import styled from 'styled-components'

export const AppWrapper = styled.div`
width:100%;
min-height:100vh;
background:${props => props.currentTheme === 'light' ? props.theme.colors.bg.light : props.theme.colors.bg.dark};
`