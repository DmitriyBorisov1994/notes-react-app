import styled from 'styled-components'

export const StyledNotesList = styled.ul`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding:1rem 0rem;
grid-gap:1rem;

@media${props => props.theme.media.tablet}{
   grid-template-columns: 1fr 1fr;
   padding:2rem 0rem;
}
@media${props => props.theme.media.phone}{
   grid-template-columns: 1fr ;
   padding:2rem 0rem;
}
`