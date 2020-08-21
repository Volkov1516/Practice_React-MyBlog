import React, {useState} from  'react'
import style from './Home.module.css'
import Post from './post/Post'

const Home = () => {

    const [posts, setPost] = useState([
        {id: 1, 
        link: "/article1",
        headline: "Привет, Мир!", 
        description: "Всем привет! Это вступительная статья данного блога, где я хочу немного рассказать о себе, идеях и планах на будущее.",
        date: "Thursday, 13 August 2020"},

        {id: 2, 
        link: "/article2",
        headline: "Hello, World!", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro repellat et doloremque aut accusamus suscipit perferendis! Sit deleniti hic exercitationem repudiandae neque quidem fugit earum dolorum! Nobis dolore iusto minima.",
        date: "Saturday, 2 July 2020"},

        {id: 3, 
        link: "/article3",
        headline: "My answer", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro repellat et doloremque aut accusamus suscipit perferendis! Sit deleniti hic exercitationem repudiandae neque quidem fugit earum dolorum! Nobis dolore iusto minima.",
        date: "Wednesday, 9 July 2020"}
    ])

    {/**Here is a reverse version of the posts object*/}
    let postsElements = posts.slice(0).reverse().map( a => <Post key={a.id} link={a.link} headline={a.headline} description={a.description} date={a.date}/>)

    return (
        <div>
            {postsElements}
        </div>
    )
}

export default Home