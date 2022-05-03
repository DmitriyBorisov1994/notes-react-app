import React from 'react'
import styled from 'styled-components'
import { Container } from './UI/Container'
import Flex from './UI/Flex'
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import Title from './UI/Title';

const StyledHeader = styled.header`
background-color:${props => props.currentTheme === 'light'
      ? props.theme.colors.component.light
      : props.theme.colors.component.dark};
box-shadow:0px 0px 6px ${props => props.theme.divider};
color:${props => props.currentTheme === 'light'
      ? props.theme.colors.text.dark
      : props.theme.colors.text.light};
`

const ThemeSwitcher = styled.div`
text-transform:capitalize;
cursor:pointer;

@media${props => props.theme.media.tablet}{
   margin:1rem 0 0;
   align-self:flex-end;
}
@media${props => props.theme.media.phone}{
   margin:1rem 0 0;
   align-self:flex-end;
}
`

const Header = (props) => {
   return (
      <StyledHeader currentTheme={props.currentTheme}>
         <Container>
            <Flex justify={'space-between'} align={'center'}>
               <Title size={'1.5rem'}>
                  Мои заметки
               </Title>
               <ThemeSwitcher onClick={props.toggleTheme}>
                  {
                     props.currentTheme === 'light'
                        ? <><IoMoonOutline size='14px' /> <span style={{ marginLeft: '.25rem' }}>{props.currentTheme} Mode</span></>
                        : <><IoMoonSharp size='14px' /> <span style={{ marginLeft: '.25rem' }}>{props.currentTheme} Mode</span></>
                  }
               </ThemeSwitcher>
            </Flex>
         </Container>
      </StyledHeader >
   )
}

export default Header