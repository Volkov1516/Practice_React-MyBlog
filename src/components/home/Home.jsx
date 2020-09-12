import React, {useState} from  'react'
import style from './Home.module.css'
import Post from './post/Post'
import DB from '../../assets/db.json'

const Home = () => {

    {/**Here is a reverse version of the posts object from DB*/}
    let postsElements = DB.posts.slice(0).reverse().map( a => <Post key={a.id} link={a.link} headline={a.headline} description={a.description} date={a.date}/>)

    return (
        <div>
            {postsElements}
        </div>
    )
}

export default Home