import React from 'react'
import Dtformat from './utility/Dtformat'

const Hobbies = (props) => {
  return (
      <>
    <div>{props.hobby}</div>
    <div><Dtformat dt={props.dt}></Dtformat></div>
    </>

  )
}

export default Hobbies