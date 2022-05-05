import React from 'react'
import styled from 'styled-components'
import { Container } from './UI/Container'
import Flex from './UI/Flex'
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import Title from './UI/Title';
import { ThemeSwitcher } from './UI/ThemeSwitcher';
import { StyledHeader } from './UI/StyledHeader';

const Header = ({ currentTheme, toggleTheme }) => {
   return (
      <StyledHeader currentTheme={currentTheme}>
         <Container>
            <Flex justify={'space-between'} align={'center'}>
               <Title size={'1.5rem'}>
                  Мои заметки
               </Title>
               <ThemeSwitcher onClick={toggleTheme} currentTheme={currentTheme}>
                  {
                     currentTheme === 'light'
                        ? <><IoMoonOutline size='14px' /> <span style={{ marginLeft: '.25rem' }}>{currentTheme} Mode</span></>
                        : <><IoMoonSharp size='14px' /> <span style={{ marginLeft: '.25rem' }}>{currentTheme} Mode</span></>
                  }
               </ThemeSwitcher>
            </Flex>
         </Container>
      </StyledHeader >
   )
}

export default Header