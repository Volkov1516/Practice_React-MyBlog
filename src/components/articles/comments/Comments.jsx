import React, {useState} from  'react'
import style from './Comments.module.css'
import DB from '../../../assets/db.json'

const Comments = () => {
    const [inputValue, setInputValue] = useState('')
    const [comments, setComment] = useState( DB.comments )

    const addComment = () => {
        const newComment = {id: 4, text: inputValue, date: "Friday, 1 July 2020"}
        setComment([newComment, ...comments])
        setInputValue('')
    }

    return (
        <div className={style.wrapper}>

            <div className={style.inputCommentsArea}>
                <input className={style.inputText} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button className={style.sentBtn} onClick={addComment}>sent</button>
            </div>
            <div className={style.outputCommentsArea}>
                <ul>
                        {comments.map((item) => (<li key={item.id}><p>{item.text} <br/> {item.date}</p></li>))}
                </ul>
            </div>
        </div>
    )
}

export default Comments