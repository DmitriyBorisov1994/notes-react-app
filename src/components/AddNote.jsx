import React, { useRef, useState } from 'react'
import Flex from './UI/Flex'
import { IoAdd, IoCloseOutline } from 'react-icons/io5'
import Button from './UI/Button'
import { StyledTextarea } from './UI/StyledTextarea'


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
      <Flex justify={'space-between'} align={'center'} flex={'1 1 auto'}>
         <StyledTextarea
            ref={newNoteElement}
            value={note.text}
            onChange={() => setNote({ ...note, text: newNoteElement.current.value })}
         />
         <Flex justify={'flex-end'} align={'center'} flex={'1 1 100px'} gap={'.5rem'} wrap={'no-wrap'}>
            <Button onClick={() => setNote({ text: '' })}
               currentTheme={props.currentTheme}>
               <IoCloseOutline size={'1.5rem'} />
            </Button>
            <Button onClick={addNewNote}
               currentTheme={props.currentTheme}>
               <IoAdd size={'1.5rem'} />
            </Button>
         </Flex>
      </Flex>
   )
}

export default AddNote