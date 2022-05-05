import styled from 'styled-components'

export const NoNotesMessage = styled.p`
padding:1rem 0rem;
text-align:center;
font-size:2rem;
color:${props => props.currentTheme === 'light'
      ? props.theme.colors.text.dark
      : props.theme.colors.text.light};
@media ${props => props.theme.media.tablet}{
   padding:2rem 0rem;
};
@media ${props => props.theme.media.phone}{
   padding:2rem 0rem;
   font-size:1.5rem;
};
`