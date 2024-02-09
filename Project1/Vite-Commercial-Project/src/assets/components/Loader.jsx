import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
  return (
    <div><Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="light" /></div>
  )
}

export default Loader