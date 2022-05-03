import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
margin:${props => props.margin || '0'};
color: ${props => props.currentTheme === 'light'
      ? props.theme.colors.accent.dark
      : props.theme.colors.accent.light};
border:2px solid ${props => props.currentTheme === 'light'
      ? props.theme.colors.accent.dark
      : props.theme.colors.accent.light};
border-radius:50%;
width:${props => props.size || '40px'};
height:${props => props.size || '40px'};
background: transparent;
cursor:pointer;
&:hover{
   color:${props => props.currentTheme === 'light'
      ? props.theme.colors.accent.dark
      : props.theme.colors.accent.light};
   border:2px solid ${props => props.currentTheme === 'light'
      ? props.theme.colors.accent.dark
      : props.theme.colors.accent.light};
      background-color:${props => props.currentTheme === 'light'
      ? props.theme.colors.component.light
      : props.theme.colors.component.dark};
}
`

const Button = ({ children, ...props }) => {
   return (
      <StyledButton currentTheme={props.currentTheme} {...props}>{children}</StyledButton>
   )
}

export default Button