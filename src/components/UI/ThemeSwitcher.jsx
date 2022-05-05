import styled from 'styled-components'

export const ThemeSwitcher = styled.div`
text-transform:capitalize;
cursor:pointer;
padding:.5rem;
border-radius:.5rem;
&:hover {
   background-color:${props => props.currentTheme === 'light'
      ? props.theme.colors.component.dark
      : props.theme.colors.component.light};
   color:${props => props.currentTheme === 'light'
      ? props.theme.colors.text.light
      : props.theme.colors.text.dark};
};

@media${props => props.theme.media.tablet}{
   margin:1rem 0 0;
   align-self:flex-end;
}
@media${props => props.theme.media.phone}{
   margin:1rem 0 0;
   align-self:flex-end;
}
`