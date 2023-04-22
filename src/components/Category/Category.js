import React from "react";
import { Link } from "wouter";
import "./Category.css"

const Category = ({nombre, tipos=[]}) => { return  (
<>
<h3>{nombre}</h3>
<div className='populares' key={tipos.id}>
    {tipos.map (tipo => (<Link className='gifPopulares' key={tipos.id} to={`/search/${tipo}`}>{tipo}</Link>))}
</div>
</>) }

export default Category;