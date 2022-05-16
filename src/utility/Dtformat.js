import React from 'react'

const Dtformat = (props) => {
  return (
    <div>{props.dt.toLocaleString()}</div>
  )
}

export default Dtformat