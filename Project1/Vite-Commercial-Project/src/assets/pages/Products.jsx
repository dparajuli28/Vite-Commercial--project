import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { errorToast } from "../../services/toast.service";
import Loader from "../components/Loader";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProductForm";
import ViewProduct from "../components/ViewProduct";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    thumbnail: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState([false]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [showViewProduct, setShowViewProduct] = useState(false);
  const [viewedProduct, setViewedProduct] = useState({});
  const [originalProducts, setOriginalProducts] = useState({});

  const navigate = useNavigate();

  const URL = import.meta.env.VITE_BACKEND_URL;
  // console.log(URL);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(URL + "product");
      setProducts(data.products);
      setOriginalProducts(data.products);

      const categories = data.products.map((product) => {
        return product.category;
      });
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories);
      setIsLoading(false);
    } catch (error) {
      errorToast(error.toast.response);
      setIsLoading(false);
    }

    // console.log (data)
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProds = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(filteredProds);
  };

  useEffect(() => {
    getData();
  }, []);

  const showProduct = (e) => {
    e.preventDefault();
    // setProducts([product, ...products]);
    setShow(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const handleChange = (e) => {
    // setProduct({
    //   ...product,
    //    [e.target.name]: e.target.value,                            //same method below and this
    // })
    // console.log({...product, [e.target.name]: e.target.value });

    setProduct((prev) => {
      // console.log({...prev, [e.target.name]: e.target.value });
      return { ...prev, [e.target.name]: e.target.value, id: Date.now() };
    });
  };

  const addProductHandler = (e) => {
    e.preventDefault();

    // setProducts([product])
    //   const newProducts=products.unshift(product)
    //   console.log(products)
    setProducts([product, ...products]);
    setShow(false);
  };

  function handleCloseEdit() {
    // Function to close the edit modal by updating the showEdit state to false
    setShowEdit(false);
  }

  const editHandler = (e, id) => {
    e.preventDefault();
    // Find the product with the specified id from the products array
    const prod = products.find((product) => product.id === id);
    // Set the found product as the editedProduct and display the edit modal
    setEditedProduct(prod);
    setShowEdit(true);
  };

  function handleEditChange(e) {
    // Update the editedProduct state based on the input change
    setEditedProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function editProduct(e) {
    e.preventDefault();

    // Update the products array by replacing the edited product with the updated values
    const updatedProd = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );

    // Update the products state with the modified array and close the edit modal
    setProducts(updatedProd);
    setShowEdit(false);
  }

  function closeViewProductModel() {
    setShowViewProduct(false);
  }

  const viewClickHandler = (e, id) => {
    e.preventDefault();
    const viewProd = products.find((product) => {
      return product.id === id;
    });
    setViewedProduct(viewProd);
    setShowViewProduct(true);
  };

  function searchProduct(e) {
    // console.log(e.target.value);

    // console.log(products[0].title.toLowerCase().includes(e.target.value.toLowerCase()))

    const searchedData = originalProducts.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProducts(searchedData);
  }

  function filterProducts(data) {
    if (data !== "") {
      const filteredProd = originalProducts.filter((item) => {
        return item.category === data;
      });
      setProducts(filteredProd);
    } else {
      setProducts(originalProducts);
    }
  }
  const handleLogout = () => {
    // Perform logout logic...
    // Clear isLoggedIn from local storage
    localStorage.removeItem("isLoggedIn");
    // Redirect to the login page
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Form>
            <Row>
              <Col>
                <Button variant="primary" onClick={showProduct}>
                  Add product
                </Button>
              </Col>
              <Col>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingSelectGrid"
                  label="Product category"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    onChange={(e) => filterProducts(e.target.value)}
                  >
                    <option value="">Select categories</option>
                    {categories.map((category) => {
                      return (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Search Product"
                  type="text"
                  name="searchKey"
                  className="mb-4"
                  onChange={searchProduct}
                />
              </Col>
              <Col>
                <Button onClick={handleLogout} variant="dark">
                  Logout
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="d-flex flex-wrap gap-5">
            {products.map((product) => {
              return (
                <>
                  <ProductList
                    key={product.id}
                    product={product}
                    deleteHandler={deleteHandler}
                    editHandler={editHandler}
                    viewClickHandler={viewClickHandler}
                  />
                </>
              );
            })}
          </div>
          <AddProduct
            show={show}
            handleClose={handleClose}
            handleChange={handleChange}
            addProductHandler={addProductHandler}
          />
          <EditProduct
            show={showEdit}
            handleClose={handleCloseEdit}
            editedProduct={editedProduct}
            handleEditChange={handleEditChange}
            editProduct={editProduct}
          />
          <ViewProduct
            show={showViewProduct}
            handleClose={closeViewProductModel}
            viewedProduct={viewedProduct}
          />
        </>
      )}
    </>
  );
};

export default Products;
