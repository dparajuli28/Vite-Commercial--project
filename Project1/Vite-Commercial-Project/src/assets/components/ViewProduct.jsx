import React from 'react'
import {Modal, Form, FloatingLabel, Button} from 'react-bootstrap'
import { returnDiscountAmount, returnTotal } from '../../utils/helper'

const ViewProduct = ({show, handleClose, viewedProduct}) => {
  return (
    <div>
         <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>View Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingImage"
              label="Product Image"
              className="mb-3"
            >
               <img
              src={viewedProduct.thumbnail}
              name="thumbnail"
              placeholder='product thumbnail'
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />            
            </FloatingLabel>
            
            <FloatingLabel
              controlId="floatingTitle"
              label="Product Title"
              className="mb-3"
            >
               <Form.Control
              type="text"
              name="title"
              placeholder="Product Title"
              value={viewedProduct.title}
            ></Form.Control>
            </FloatingLabel>
           
            <FloatingLabel
              controlId="floatingDesc"
              label="Product Description"
              className="mb-3"
            >
               <Form.Control
              type="text"
              name="description"
              as="textarea"
              placeholder="Product Description"
              value={viewedProduct.description}
            ></Form.Control>
            </FloatingLabel>
           
            <FloatingLabel
              controlId="floatingDis"
              label="Discount percentage"
              className="mb-3"
            >
               <Form.Control
              type="text"
              name="discountPercentage"
              placeholder="Discount Percentage"
              value={viewedProduct.discountPercentage}
            ></Form.Control>
            </FloatingLabel>
           
            <FloatingLabel
              controlId="floatingPrice"
              label="Sub Total"
              className="mb-3"
            >
              <Form.Control
              type="text"
              name="price"
              placeholder="sub Total"
              value={viewedProduct.price}
            ></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel
              controlId="floatingDiscountAmount"
              label="Discount Amount"
              className="mb-3"
            >
              <Form.Control
              type="text"
              placeholder="Discount Amount"
              value={returnDiscountAmount(viewedProduct)}
            ></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel
              controlId="floatingTotal"
              label="Total"
              className="mb-3"
            >
              <Form.Control
              type="text"
              placeholder="Total"
              value={returnTotal(viewedProduct)}
            ></Form.Control>
            </FloatingLabel>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ViewProduct