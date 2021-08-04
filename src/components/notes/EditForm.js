import React from 'react'
import{useDispatch,useSelector} from "react-redux"
import { updateNote } from '../../store/actions/noteactions'
import useInput from '../../custom_hook/useInput'
import {useHistory} from "react-router-dom"
const EditForm = () => {
      const note=useSelector((state)=>state.note)
      console.log(note)
      const [title, bindTitle, resetTitle] = useInput(note.title);
      const [content, bindContent, resetContent] = useInput(note.content);
      const history=useHistory()
      const dispatch = useDispatch();

      const handleSubmit = (e) => {
          e.preventDefault()
          dispatch(updateNote({id:note.id, title, content }))
          resetTitle()
          resetContent()
          history.push('/')
      }

      return (
            <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field ">
                    <input id="first_name" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="textarea1" className="materialize-textarea" {...bindContent}></textarea>
                    <label className="active"  htmlFor="textarea1">Note Content</label>
                </div>
                <button className="btn green">Updtae</button>
            </form>
        </div>
      )
}

export default EditForm
