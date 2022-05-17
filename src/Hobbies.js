import React from 'react'
import Card from './UI/Card'
import Dtformat from './utility/Dtformat'

const Hobbies = (props) => {
  return (
      <Card>
    <div>{props.hobby}</div>
    <div><Dtformat dt={props.dt}/></div>
    </Card>

  )
}

export default Hobbies