const Display = (props) => {

    const { albums, setAlbums } = props
    // const { albumName, genre, releaseYear, isExplicit } = album

    const toggleListened = (id) => {
        const updatedList = albums.map((album)=>{
            if(id === album.id){
                album.listened = !album.listened
            }
            return album
        })
        console.log(updatedList)
        setAlbums(updatedList)
    }

    return (
        <div >
            <h1>Albums</h1>
            <div className="d-flex border p-3">
            {albums.map((album) => (
                <div key={album.id}>
                    <h2>ID : {album.id}</h2>
                    <h3>NAME : {album.albumName}</h3>
                    <p>GENRE : {album.genre}</p>
                    <p>RELEASE YEAR : {album.releaseYear}</p>
                    <p>Explicit : {album.isExplicit ? "Parental Advisory" : "Not Explicit"}</p>
                    <label >Listened ?</label>
                    <input type="checkbox" name="isExplicit" defaultChecked={album.listened} onClick={() => toggleListened(album.id)} />
                </div>
                
            ))}
            </div>
        </div>
    )
}

export default Display