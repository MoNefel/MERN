import { useState } from "react";

const Form = () => {

    const [albumName, setAlbumName] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [recommend, setRecommend] = useState('')
    const [isExplicit, setIsExplicit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const album = { albumName, genre, releaseYear, recommend, isExplicit }

        console.log(album)

        setAlbumName('')
        setGenre('')
        setReleaseYear('')
    }

    return (
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
                    <p>Favorites:</p>
                    <label>Love it</label>
                    <input type="radio" name="recommended" value={"Love it"} onClick={(e)=> setRecommend(e.target.value)}/>
                    <label>Like it</label>
                    <input type="radio" name="recommended" value={"Like it"} onClick={(e)=> setRecommend(e.target.value)}/>
                    <label>Normal</label>
                    <input type="radio" name="recommended" value={"Normal"} onClick={(e)=> setRecommend(e.target.value)}/>
                </div>
                <div>
                    <label>Explicit</label>
                    <input type="checkbox" defaultChecked={isExplicit} onClick={(e)=> setIsExplicit(!isExplicit)}/>
                    {/* <input type="checkbox" checked={isExplicit} onChange={(e)=> setIsExplicit(!isExplicit)}/> */}
                </div>
                <button>Add Album</button>
            </form>
        </div>
    );
}

export default Form;