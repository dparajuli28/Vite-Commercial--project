import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";
import axios from "axios";

const QuoteDisplay = () => {
  const [id, setId] = useState(1);
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const toogleQuotes = async (e) => {
    e.preventDefault();

    const { data } = await axios.get("https://dummyjson.com/quotes");    //where {data} means response.data//
    const { quotes } = data;

    const qts = quotes.find((item) => item.id === id);
    setAuthor(qts.author);
    setQuote(qts.quote);
    setId(id + 1);

  };
  return (
    <Card>
      <CardHeader>
        <h1>Quote Display</h1>
      </CardHeader>
      <CardBody>
        <b>Author:{author}</b>
        <br />
        <i>Quote:{quote}</i>
      </CardBody>
      <CardFooter>
        <Button variant="info" className="me-2" onClick={toogleQuotes}>
          Toogle
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuoteDisplay;
