import React, { useState } from 'react'
import styled from 'styled-components'
import Note from './Note'

const StyledNotesList = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding:1rem 0rem;
grid-gap:1rem;

@media${props => props.theme.media.tablet}{
   grid-template-columns: 1fr 1fr;
   padding:2rem 0rem;
}
@media${props => props.theme.media.phone}{
   grid-template-columns: 1fr ;
   padding:2rem 0rem;
}
`

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