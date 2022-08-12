import React from 'react'
import './Info.css'

const Info = ({title, content, icon}) => {
  return (
    <div className='info'>
        <div className={title}>
            <i>{icon}</i>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Info