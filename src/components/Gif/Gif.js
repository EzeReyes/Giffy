import React from "react";
import "./Gif.css";
import { Link } from "wouter";

const Gif = ( {title,id,url}) => {
    

    return (
        <div className="gif">
        <h3>{title}</h3>
        <Link to={`/gif/${id}`}><img  className="imgGif" src={url} alt={id}/></Link>
        </div> )}

export default Gif;