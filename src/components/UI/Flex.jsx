import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
display:flex;
width:100%;
flex-direction:${props => props.direction || 'row'};
align-items:${props => props.align || 'stretch'};
justify-content:${props => props.justify || 'stretch'};
margin:${({ margin }) => margin || '0'};
flex-wrap:${props => props.wrap || 'wrap'};
flex:${props => props.flex || '1 0 auto'};
gap: .5rem;
}
`

const Flex = (props) => {
   return (
      <StyledFlex {...props} />
   )
}

export default Flex