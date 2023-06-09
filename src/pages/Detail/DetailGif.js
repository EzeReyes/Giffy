import React, { useContext } from "react";
import GifContext from "Context/GifContext";
import Gif from "components/Gif/Gif";


const Detail = ({params}) => {

    const {gif} =useContext(GifContext)

    const gifUnico = gif.find(singleGif => singleGif.id === params.id)
    console.log({gifUnico})

    function descargasRandom(max) {
        return Math.floor(Math.random() * max);
    }
    
    return (
        <>
        <h2>Gif Seleccionado</h2>
        <Gif {...gifUnico}/>
        <div>
            <h3>Info del Gif</h3>
            <h3>Nombre: <h5>{gifUnico.title}</h5></h3>
            <h3>ID: {gifUnico.id}</h3>
            <h3>URL: {gifUnico.url}</h3>
            <h3>Cantidad de descargas: {descargasRandom(100)}</h3>
        </div>
        </>
    )
}

export default Detail;
