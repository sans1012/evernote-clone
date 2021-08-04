import React from 'react'
import {deleteNote} from "../../store/actions/noteactions"
import {useDispatch} from "react-redux"
import {toggleFavorite} from "../../store/actions/noteactions"
import {Link} from "react-router-dom"
import moment from "moment"
const Note = ({note}) => {
      const dispatch=useDispatch()
      const deleteNoteHandler=()=>{
            dispatch(deleteNote(note))
      }

      const toggleFavoriteHandler=()=>{
            dispatch(toggleFavorite(note))
      }

      const heartMarkup=note.favorite?"favorite":"favorite_border"

      const editNoteHandler=()=>{
            dispatch({type:"EDIT_NOTE", payload:note})
      }

      return (
            <div className="note white">
                 <div className="right-align">
                  
                  <i className="material-icons red-text" style={{cursor:"pointer"}}
                  onClick={toggleFavoriteHandler}>{heartMarkup}</i>
                  
                  <i className="material-icons" style={{cursor:"pointer"}} 
                  onClick={deleteNoteHandler}
                  >delete</i>
                  </div>
                  
                  <Link to={'/note/'+ note.id}>
                        <h5 className="black-text">{note.title}</h5>
                  </Link>
                  
                  <p className="truncate">
                        {note.content}
                  </p>
                  
                  <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()} 
                  </p>
                  
                  <div className="right-align">
                        
                        <Link to={`/editform/${note.id}`}>
                              <i className= "material-icons black-text" onClick={editNoteHandler}> edit</i> 
                        </Link>
                  </div>
            </div>

      )
}

export default Note
