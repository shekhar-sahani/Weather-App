import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Navbar from './Navbar'

export default function About() {
    // const heading = useContext(noteContext)
    // useEffect(() => {
    //     heading.toggleUpdate()
    // }, [])
    return (
        <div>
            <Navbar />
            <h4>This is about page</h4>
        </div>
    )   
}
