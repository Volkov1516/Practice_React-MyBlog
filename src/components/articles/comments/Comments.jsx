import React, {useState, useEffect} from  'react'
import style from './Comments.module.css'
import DB from '../../../assets/db.json'
import axios from 'axios'

const Comments = () => {
    const [inputValue, setInputValue] = useState('')
    const [comments, setComment] = useState( DB.comments )

    useEffect(() => {
        axios.get('http://localhost:3001/comments').then(({ data }) => {
            console.log(data);
          });
      }, []);

    const addComment = () => {
        const newComment = {id: 4, text: inputValue, date: "Friday, 1 July 2020"}
        setComment([newComment, ...comments])
        setInputValue('')
    }

    return (
        <div className={style.wrapper}>

            <div className={style.inputCommentsArea}>
                <input className={style.inputText} placeholder='Enter message...' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button className={style.sentBtn} onClick={addComment}>sent</button>
            </div>
            <div className={style.outputCommentsArea}>
                <ul>
                        {comments.map((item) => (<li key={item.id}><p><span className={style.text}>{item.text}</span> <br/> <span className={style.date}>{item.date}</span></p></li>))}
                </ul>
            </div>
        </div>
    )
}

export default Comments