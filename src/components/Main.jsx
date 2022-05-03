import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from './UI/Container'
import AddNote from './AddNote'
import NoteList from './NoteList'

const StyledMain = styled.main`
padding:1rem 0rem;
@media ${props => props.theme.media.tablet}{
   padding:2rem 0rem;
};
@media ${props => props.theme.media.phone}{
   padding:2rem 0rem;
};
`
const StyledP = styled.p`
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
};
`

const Main = (props) => {

   const initialNote = {
      text: 'Привет! Я тестовая заметка. Меня можно удалить или отредактировать, нажав на соответствующие кнопки ниже!',
      id: Date.now(),
      date: `${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}.${new Date().getFullYear()}`
   }

   const [notes, setNotes] = useState([initialNote])

   function createNote(newNote) {
      setNotes([...notes, newNote])
   }

   const updateNote = (id, newText) => {
      setNotes(prev => prev.map(note => (note.id === id ? { ...note, text: newText } : note)))
   }
   //{ ...note, text: newNoteElement.current.value })
   function removeNote(id) {
      setNotes(notes.filter(todo => todo.id !== id))
   }

   return (
      <StyledMain>
         <Container>
            <AddNote createNote={createNote} currentTheme={props.currentTheme} />
            {!notes.length
               ? <StyledP currentTheme={props.currentTheme}>У Вас нет заметок</StyledP>
               : <NoteList
                  notes={notes}
                  currentTheme={props.currentTheme}
                  removeNote={removeNote}
                  updateNote={updateNote}
               />}
         </Container>
      </StyledMain>
   )
}

export default Main