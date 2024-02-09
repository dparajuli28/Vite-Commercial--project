/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../../utils/helper";

const EditProduct = ({
  show,
  handleClose,
  editedProduct,
  handleEditChange,
  editProduct,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingImage"
              label="Product Image"
              className="mb-3">
                <Form.Control
              type="text"
              name="thumbnail"
              placeholder="Product Image"
              onChange={handleEditChange}
              value={editedProduct.thumbnail}
            ></Form.Control>
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
              onChange={handleEditChange}
              value={editedProduct.title}
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
              onChange={handleEditChange}
              value={editedProduct.description}
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
              onChange={handleEditChange}
              value={editedProduct.discountPercentage}
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
              onChange={handleEditChange}
              value={editedProduct.price}
            ></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel
              controlId="floatingDiscountAmount"
              label="Discount Amount"
              className="mb-3"
            >
              <Form.Control
              type="text"
              readOnly
              placeholder="Discount Amount"
              onChange={handleEditChange}
              value={returnDiscountAmount(editedProduct)}
            ></Form.Control>
            </FloatingLabel>
            
            <FloatingLabel
              controlId="floatingTotal"
              label="Total"
              className="mb-3"
            >
              <Form.Control
              type="text"
              readOnly
              placeholder="Total"
              onChange={handleEditChange}
              value={returnTotal(editedProduct)}
            ></Form.Control>
            </FloatingLabel>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => editProduct(e)}>
            save edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;
