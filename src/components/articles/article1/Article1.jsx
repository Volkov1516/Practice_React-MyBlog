import React from  'react'
import style from './Article1.module.css'
import Comments from '../comments/Comments'

const Article1 = () => {

    return (
        <div className={style.wrapper}>
            <h1 className={style.h1}>Hello, World!</h1>
            <h2 className={style.h2}>Header</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos modi illo saepe iure esse quis nostrum corporis molestiae doloremque! Nemo nostrum, consequatur modi fugiat architecto fugit eius error deserunt voluptas.
            </p>

            <h2 className={style.h2}>Header</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores tempora iure doloribus asperiores est alias explicabo rem. Odit ullam tempora obcaecati nobis natus ut accusamus mollitia voluptatum sint cumque.
            </p>

            <h2 className={style.h2}>Header</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium autem dolores officiis veritatis quidem laboriosam minima, laborum laudantium fugiat suscipit, quibusdam consectetur praesentium culpa non recusandae, id quisquam nisi.
            </p>

            <h2 className={style.h2}>Header</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum obcaecati ducimus repellat laudantium nobis itaque amet adipisci architecto officiis doloribus iure accusamus repudiandae, voluptate delectus aliquid cumque est. Recusandae, repellat!
            </p>

            <h2 className={style.h2}>Header</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem. Tempore iusto maiores alias reprehenderit totam sed voluptatum nesciunt temporibus, odio velit natus voluptatibus earum, dolor facere excepturi amet ut?
            </p>
            
            <Comments />
        </div>
    )
}

export default Article1