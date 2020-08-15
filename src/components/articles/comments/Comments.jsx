import React from  'react'
import style from './Comments.module.css'

const Comments = () => {

    let [comment, setComment] = React.useState( [
        {id: 1, text: "Hello!", date: "Friday, 1 July 2020"},
        {id: 2, text: "Awesome article!", date: "Saturday, 2 July 2020"},
        {id: 3, text: "Just amazing!", date: "Wednesday, 9 July 2020"}
    ])

    const addComment = () => {
        let staticComment = {id: 1, text: "Hi!", date: "Friday, 1 July 2020"}
        setComment([...comment, staticComment]);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputCommentsArea}>
                <input className={style.inputText} type="text"/>
                <button className={style.sentBtn} onClick={addComment}>sent</button>
            </div>
            <div className={style.outputCommentsArea}>
                <ul>
                        {comment.map((item, id) => (<li key={id}><p>{item.text} <br/> {item.date}</p></li>))}
                </ul>
            </div>
        </div>
    )
}

export default Comments