import React from "react";
import Gif from '../Gif/Gif';
import "./ListOfGif.css";



const ListOfGif = ({gif}) => { 

    return (
    <div className="ListOfGif">
    {gif.map( images => <Gif title={images.title} url={images.url} id={images.id} key={images.id}/>)}
    </div>)}


export default ListOfGif;