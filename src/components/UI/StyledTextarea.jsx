import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
resize:none;
padding:.5rem;
border-radius:0.5rem;
flex:1 1 90%;
min-width:250px;
border:none;
outline:none;
&:hover{box-shadow:0px 0px 6px ${props => props.theme.divider};}
&:focus{box-shadow:0px 0px 6px ${props => props.theme.divider};}
`