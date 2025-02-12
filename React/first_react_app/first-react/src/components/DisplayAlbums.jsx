const Display = (props) => {

    const { albums } = props
    // const { albumName, genre, releaseYear, isExplicit } = album

    return (
        <div>
            <h1>Albums</h1>
            {albums.map((album) => (
                <div key={album.id}>
                    <h2>ID : {album.id}</h2>
                    <h3>NAME : {album.albumName}</h3>
                    <p>GENRE : {album.genre}</p>
                    <p>RELEASE YEAR : {album.releaseYear}</p>
                    <p>{album.isExplicit ? "Explicit" : "Not Explicit"}</p>
                </div>
            ))}
        </div>
    )
}

export default Display