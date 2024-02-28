import React, { useEffect } from 'react'
import { useState } from 'react'


const PushDataInArray = () => {


    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    const [nextid, setNextId] = useState(0);
    const [edit, setEdit] = useState(null)


    useEffect(() => {
        if (artists.length === 0) {
            setNextId(0)
        }
    }, [])


    const addItem = () => {

        if (name !== '') {
            if (edit !== null) {
                setArtists(artists.map((item) => {
                    if (item.id === edit) {
                        return { ...item, name: name }
                    } else {
                        return item;
                    }
                }))
                setEdit(null)
            } else {
                setNextId(() => nextid + 1)
                setArtists((pre) => [...pre, { id: nextid, name: name }])
            }
        }
        setName('')
    }

    const edituser = (artist) => {
        setName(artist.name)
        setEdit(artist.id)
    }

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => { if (name !== "") addItem(); }}> {edit !== null ? 'Update' : 'Add'}</button>
            <ul>
                {

                    artists.map(artist => (
                        <li key={artist.id}>
                            {artist.name}{' '}
                            <button onClick={() => edituser(artist)}>edit</button>
                            <button onClick={() => setArtists(artists.filter(i => i.id !== artist.id))}>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default PushDataInArray

