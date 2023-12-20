import React from 'react'
import {Spinner} from 'react-bootstrap'

const loader = () => {
  return (
    <div>
      <Spinner animation='border' role='status' style={{display:'block',width: '100px',height:'100px',margin:'auto'}}></Spinner>
    </div>
  )
}

export default loader
