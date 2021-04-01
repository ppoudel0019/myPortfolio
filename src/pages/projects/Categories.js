import React from 'react';
import './projects.css'
import Button from "react-bootstrap/Button";

function Categories({filter, categories}) {
    return (
        <div className="projects">
            {
                categories.map((cat, i)=>{
                    return <div className="category-style"> <Button className="m-2" variant="light" onClick={()=> filter(cat)} key={i}>{cat}</Button></div>
                })
            }
        </div>
    )
}

export default Categories;