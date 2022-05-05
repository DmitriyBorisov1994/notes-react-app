import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
   font-size:${props => props.size || '14px'};
   text-align:${props => props.align || 'left'};
   padding:${props => props.padding || '0 0 0 0'};
   border-bottom:${props => props.underline || 'none'};

   @media${props => props.theme.media.tablet}{
      width:100%;
      text-align:center;
      
   }
   @media${props => props.theme.media.phone}{
      width:100%;
      text-align:center;
   }
`

const Title = ({ children, ...props }) => {
   return (
      <StyledTitle {...props}>{children}</StyledTitle>
   )
}

export default Title