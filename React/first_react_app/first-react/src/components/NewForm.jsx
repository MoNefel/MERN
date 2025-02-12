import { useState } from "react"
import {v4 as uuidv4 } from 'uuid'

const date = new Date()
const formattedDate = date.toISOString().split('T')[0]

const NewForm = (props) => {

        const { albums, setAlbums } = props
        const [albumName, setAlbumName] = useState('')
        const [genre, setGenre] = useState('')
        const [releaseYear, setReleaseYear] = useState(formattedDate)
        const [isExplicit, setIsExplicit] = useState(false)
        const [isSubmitted, setIsSubmitted] = useState(false)
        const [listened, setListened] = useState(false)

        
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const newAlbum = { albumName, genre, releaseYear, isExplicit, id: uuidv4(), listened }
            setAlbums([...albums, newAlbum])
    
            console.log(newAlbum)
    
            setAlbumName('')
            setGenre('')
            setReleaseYear(formattedDate)
            setIsExplicit(false)
            setIsSubmitted(true)
            //alert('Thanks for posting your album!')
            setTimeout(() => {
                setIsSubmitted(false)
            }, 3000)
        }

    return(
        <div>
            <h2>Album Form</h2>
            {
                isSubmitted 
                ? <h3>Thanks for submitted the form</h3> 
                : <h3>Please fill out the form</h3>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Album Name:</label>
                    <input type="text" name="albumName" value={albumName} onChange={(e) => setAlbumName(e.target.value)} />
                    {
                        albumName.length < 3 
                        ? <p>Album name must be at least 3 characters</p> 
                        : ''
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                    {
                        genre.length < 3 
                        ? <p>Genre must be at least 3 characters</p> 
                        : ''
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="date" name="releaseYear" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
                </div>
                <div>
                    <label>Explicit</label>
                    <input type="checkbox" defaultChecked={isExplicit} onClick={(e)=> setIsExplicit(!isExplicit)}/>
                    {/* <input type="checkbox" checked={isExplicit} onChange={(e)=> setIsExplicit(!isExplicit)}/> */}
                </div>
                <button>Add Album</button>
            </form>
        </div>
    )
}

export default NewForm