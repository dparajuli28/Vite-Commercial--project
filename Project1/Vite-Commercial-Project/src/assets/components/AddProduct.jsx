import React from 'react'
import {Modal,Button, Form, FloatingLabel} from 'react-bootstrap';

const AddProduct = ({show, handleClose, handleChange, addProductHandler}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={true}>
    <Modal.Header closeButton >
      <Modal.Title>Add product form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <FloatingLabel controlId='floatingImage' placeholder='Product Image' className='mb-3'/>
          <Form.Control type='text' name='thumbnail' placeholder='Product Image' onChange={handleChange}></Form.Control>
        <FloatingLabel controlId='floatingTitle' placeholder='Product Title' className='mb-3'/>
          <Form.Control type='text' name='title' placeholder='Product Title' onChange={handleChange}></Form.Control>
        <FloatingLabel controlId='floatingDesc' placeholder='Product Description' className='mb-3'/>
          <Form.Control type='text' name='description' as="textarea" rows={3} placeholder='Product Description' onChange={handleChange}></Form.Control>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={addProductHandler}>
        Add item
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default AddProduct