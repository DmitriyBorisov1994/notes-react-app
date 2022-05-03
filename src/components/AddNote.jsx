import React, { useRef, useState } from 'react'
import Flex from './UI/Flex'
import { IoAdd, IoCloseOutline } from 'react-icons/io5'
import styled from 'styled-components'
import Button from './UI/Button'

const StyledTextarea = styled.textarea`
resize:none;
padding:.5rem;
border-radius:0.5rem;
width:100%;
border:none;
outline:none;
`

const AddNote = ({ createNote, ...props }) => {
   const [note, setNote] = useState({ text: '' })
   let newNoteElement = useRef(null)

   const addNewNote = (event) => {
      event.preventDefault()

      const newNote = {
         ...note,
         id: Date.now(),
         date: `${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}.${new Date().getFullYear()}`
      }

      if (newNote.text.trim()) createNote(newNote);
      setNote({ text: '' })
   }

   return (
      <Flex align={'center'}>
         <StyledTextarea
            ref={newNoteElement}
            value={note.text}
            onChange={() => setNote({ ...note, text: newNoteElement.current.value })}
         />
         <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
            <Button onClick={() => setNote({ text: '' })}
               margin={'0px 0px 0px 1rem'}
               currentTheme={props.currentTheme}>
               <IoCloseOutline size={'1.5rem'} />
            </Button>
            <Button onClick={addNewNote}
               margin={'0px 0px 0px 1rem'}
               currentTheme={props.currentTheme}>
               <IoAdd size={'1.5rem'} />
            </Button>
         </div>
      </Flex>
   )
}

export default AddNote