import styled from 'styled-components'

export const StyledMain = styled.main`
padding:1rem 0rem;
@media ${props => props.theme.media.tablet}{
   padding:2rem 0rem;
};
@media ${props => props.theme.media.phone}{
   padding:2rem 0rem;
};
`