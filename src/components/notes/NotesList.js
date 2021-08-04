import React from 'react'
import Note from "./note"
const NotesList = ({notes}) => {
      return (
            <div className="noteslist">
                  {notes && notes.map(note=>
                        <Note note={note} key={note.id}/>)
                  }
            </div>
      )
}

export default NotesList
/*

import React from 'react'
import Note from './note'
const NotesList = ({ notes }) => {
    return (
        <div className="noteslist">
            {notes && notes.map(note =>

                <Note note={note} />

            )}

        </div>
    )
}

export default NotesList
*/