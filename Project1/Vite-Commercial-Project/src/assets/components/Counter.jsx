import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter, Button} from "react-bootstrap"

const Counter = () => {
    //usestate
    const [count, setCount]=useState(0);
        // let count=0;


        // useEffect(()=>{
        //     console.log("counter component")
        // },[])

    const increment =(e)=>{
        e.preventDefault();
        // console.log("increment clicked");
        // count=count+1
        setCount(count+1);
    };

    const decrement=(e)=>{
        e.preventDefault();
        setCount(count-1);
    }
    const reset=(e)=>{
        e.preventDefault();
        setCount(0);
    }
  return (
    <Card>
        <CardHeader>
            <h2>Counter</h2>
        </CardHeader>
        <CardBody>
            <h4>{count}</h4>
        </CardBody>
        <CardFooter>
            <Button variant="success" className="me-2" onClick={increment}>Increment</Button>
            <Button variant="warning" className="me-2" onClick={decrement}>Decrement</Button>
            <Button variant="danger" className="me-2" onClick={reset}>Reset</Button>
        </CardFooter>
    </Card>
  )
}

export default Counter