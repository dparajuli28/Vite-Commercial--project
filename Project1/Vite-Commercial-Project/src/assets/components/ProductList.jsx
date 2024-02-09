/* eslint-disable react/prop-types */
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../../utils/helper";

const ProductList = ({
  product,
  deleteHandler,
  editHandler,
  viewClickHandler,
}) => {

  return (
    <Card style={{ width: "350px", height: "650px" }}>
      <CardHeader className="h-25">
        <Card.Img className="h-100" src={product.thumbnail}></Card.Img>
      </CardHeader>
      <CardBody className="h-50">
        <h4>
          {product.title.length > 20
            ? product.title.slice(0, 19) + "..."
            : product.title}
        </h4>
        <p>
          {product.description.length > 60
            ? product.description.slice(0, 59) + "..."
            : product.description}
        </p>
        <p>
          <b>Subtotal: </b>$ {product.price}
        </p>
        <p>
          <b>Discount: </b>
          {product.discountPercentage}%
        </p>
        <p>
          <b>Disount Amount: </b>$ {returnDiscountAmount(product)}
        </p>
        <p>
          <b>Total: </b>$ {returnTotal(product)}
        </p>
      </CardBody>
      <CardFooter className="h-25 p-4">
        <Button
          variant="primary me-2"
          onClick={(e) => viewClickHandler(e, product.id)}
        >
          View
        </Button>
        <Button
          variant="secondary me-2"
          onClick={(e) => editHandler(e, product.id)}
        >
          Edit
        </Button>
        <Button
          variant="danger me-2"
          onClick={(e) => deleteHandler(e, product.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductList;
