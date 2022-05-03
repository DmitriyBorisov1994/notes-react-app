import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
display:flex;
flex-direction:${props => props.direction || 'row'};
align-items:${props => props.align || 'stretch'};
justify-content:${props => props.justify || 'stretch'};
margin:${({ margin }) => margin || '0'};
gap: .5rem;

@media${props => props.theme.media.tablet}{
   display:flex;
flex-direction:column;
align-items:flex-start;
}
@media${props => props.theme.media.phone}{
   display:flex;
flex-direction:column;
align-items:flex-start;
}
`

const Flex = (props) => {
   return (
      <StyledFlex {...props} />
   )
}

export default Flex