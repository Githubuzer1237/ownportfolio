import React from 'react'
import s from './Top.module.scss'

const Top = ({title, count}) => {
    return (
        <>
            <div className={s.top}>
                <h3>{title}</h3>
                <p>{count}</p>
            </div>
        </>
    )
}

export default Top