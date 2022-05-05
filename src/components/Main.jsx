import React, { useEffect, useState } from 'react'
import { Container } from './UI/Container'
import AddNote from './AddNote'
import NoteList from './NoteList'
import { StyledMain } from './UI/StyledMain'
import { NoNotesMessage } from './UI/NoNotesMessage'
import { getDateString } from '../utils/getDateString'
import { Storage } from '../utils/storage'

const Main = (props) => {

   const initialNote = {
      text: 'Привет! Я тестовая заметка. Меня можно удалить или отредактировать, нажав на соответствующие кнопки ниже!',
      id: Date.now(),
      date: getDateString()
   }

   const storageNotes = new Storage('notes')

   const [notes, setNotes] = useState(() => {
      return storageNotes.storageItems ? storageNotes.getItems() : [initialNote]
   })

   useEffect(() => {
      storageNotes.setItems(notes)
   }, [notes])

   function createNote(newNote) {
      setNotes([...notes, newNote])
   }

   const updateNote = (id, newText) => {
      setNotes(prev => prev.map(note => (note.id === id ? { ...note, text: newText } : note)))
   }

   function removeNote(id) {
      setNotes(notes.filter(todo => todo.id !== id))
   }

   return (
      <StyledMain>
         <Container>
            <AddNote createNote={createNote} currentTheme={props.currentTheme} />
            {!notes.length
               ? <NoNotesMessage currentTheme={props.currentTheme}>У Вас нет заметок</NoNotesMessage>
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