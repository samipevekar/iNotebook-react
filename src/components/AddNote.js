import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext"
import './Addnote.css'

const AddNote = (props) => {
    
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added Successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3" style={{margin:'auto',maxWidth:'700px'}}>
            <h2>Add a Note</h2>
            <form className="my-3" style={{maxWidth:"700px",margin:"auto"}}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={note.title} required id="title" name="title" aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea  rows={4} type="text" className="form-control" value={note.description} required id="description"  name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" value={note.tag} required id="tag" name="tag" onChange={onChange}  />
                </div>
               
                <button disabled={note.title.length<2 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
