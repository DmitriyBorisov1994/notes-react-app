import React, { useRef } from 'react'
import styled from 'styled-components'
import Button from './UI/Button'
import Flex from './UI/Flex'
import { IoArchive, IoCreateOutline, IoCheckmarkOutline } from 'react-icons/io5'
import Title from './UI/Title'
import { StyledNote } from './UI/StyledNote'
import { StyledNoteTextarea } from './UI/StyledNoteTextare'

const ButtonsWrapper = styled.div`
display:flex;
justify-content:flex-end;
flex:0 0 auto;
align-self:flex-end;
gap: .5rem;
`
const Note = ({ note, removeNote, edit, setEdit, submitUpdate, ...props }) => {
      let updateNoteElement = useRef(null)
      return (
            <StyledNote {...props} >
                  <Flex direction={'column'} style={{ height: '100%' }}>
                        <Title align={'center'} padding={'1rem 0rem'} size={'1.5rem'} underline={`2px solid #757575`}>
                              {note.date}
                        </Title>
                        {edit.id
                              ? <>
                                    <StyledNoteTextarea
                                          value={note.text}
                                          ref={updateNoteElement}
                                          onChange={() => submitUpdate(updateNoteElement.current.value)}
                                          currentTheme={props.currentTheme}
                                    />
                                    <ButtonsWrapper>
                                          <Button
                                                onClick={() => setEdit({ id: null, value: '', })}
                                                currentTheme={props.currentTheme}>
                                                <IoCheckmarkOutline />
                                          </Button>
                                    </ButtonsWrapper>
                              </>
                              : <>
                                    <p style={{ padding: '1rem 0rem', flex: '1 0 auto' }} > {note.text}</p>
                                    <ButtonsWrapper>
                                          <Button
                                                onClick={() => setEdit({ id: note.id, value: note.text })}
                                                currentTheme={props.currentTheme}>
                                                <IoCreateOutline />
                                          </Button>
                                          <Button
                                                onClick={() => removeNote(note.id)}
                                                currentTheme={props.currentTheme}>
                                                <IoArchive />
                                          </Button>
                                    </ButtonsWrapper>
                              </>}
                  </Flex>
            </StyledNote >
      )
}

export default Note