import React, { useState } from 'react'
import Note from './Note'
import { StyledNotesList } from './UI/StyledNotesList'

const NoteList = ({ notes, removeNote, updateNote, currentTheme }) => {

   const [edit, setEdit] = useState({
      id: null,
      value: '',
   })

   const submitUpdate = (value) => {
      updateNote(edit.id, value)
   }

   return (
      <StyledNotesList currentTheme={currentTheme}>
         {notes.map(
            (note) => {
               return <Note
                  note={note}
                  key={note.id}
                  removeNote={removeNote}
                  currentTheme={currentTheme}
                  edit={edit}
                  setEdit={setEdit}
                  submitUpdate={submitUpdate}
               />
            }
         ).reverse()}
      </StyledNotesList>
   )
}

export default NoteList