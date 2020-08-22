import React, {useState} from  'react'
import style from './Comments.module.css'

const Comments = () => {

    let [comments, setComment] = useState( [
        {id: 1, text: "Hello!", date: "Friday, 1 July 2020"},
        {id: 2, text: "Awesome article!", date: "Saturday, 2 July 2020"},
        {id: 3, text: "Just amazing!", date: "Wednesday, 9 July 2020"}
    ])

    {/** Здесь необходимо взять змачение input и заменить им значение text в staticComment */}
    let newComment = React.createRef();

    const addComment = () => {
        let staticComment = {id: 4, text: newComment.current.value, date: "Friday, 1 July 2020"}
        setComment([...comments, staticComment]);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inputCommentsArea}>
                <input className={style.inputText} ref={newComment}/>
                <button className={style.sentBtn} onClick={addComment}>sent</button>
            </div>
            <div className={style.outputCommentsArea}>
                <ul>
                        {comments.slice(0).reverse().map((item) => (<li key={item.id}><p>{item.text} <br/> {item.date}</p></li>))}
                </ul>
            </div>
        </div>
    )
}

export default Comments