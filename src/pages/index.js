import React from 'react'
import AddBookmark from '../components/AddBookmark'
import GetBookmark from '../components/GetBookmark'
import NotFound from './404'

const Home = ()=>{
    return (
        <div>
            <h1> ADD BOOKMARK FORM</h1>
            <AddBookmark />
            <h1> getting all bookmarks </h1>
            <GetBookmark />
        </div>
    )
}


export default Home