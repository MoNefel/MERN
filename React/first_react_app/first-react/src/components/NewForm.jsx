import { useState } from "react"
import {v4 as uuidv4 } from 'uuid'

const NewForm = (props) => {

        const { albums, setAlbums } = props
        const [albumName, setAlbumName] = useState('')
        const [genre, setGenre] = useState('')
        const [releaseYear, setReleaseYear] = useState('')
        const [isExplicit, setIsExplicit] = useState(false)

        
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const newAlbum = { albumName, genre, releaseYear, isExplicit, id: uuidv4() }
            setAlbums([...albums, newAlbum])
    
            console.log(newAlbum)
    
            setAlbumName('')
            setGenre('')
            setReleaseYear('')
        }

    return(
        <div>
            <h2>Album Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Album Name:</label>
                    <input type="text" name="albumName" value={albumName} onChange={(e) => setAlbumName(e.target.value)} />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
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