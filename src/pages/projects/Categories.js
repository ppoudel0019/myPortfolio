import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {
                categories.map((cat, i)=>{
                    return <Button className="m-2" variant="outline-dark" onClick={()=> filter(cat)} key={i}>{cat}</Button>
                })
            }
        </div>
    )
}

export default Categories;