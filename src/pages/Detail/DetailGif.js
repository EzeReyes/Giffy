import React, { useContext } from "react";
import GifContext from "../../Context/GifContext";
import Gif from "../../components/Gif/Gif";


const Detail = ({params}) => {

    const {gif} =useContext(GifContext)

    const gifUnico = gif.find(singleGif => singleGif.id === params.id)
    console.log({gifUnico})

    return (
        <>
        <h2>Gif Seleccionado</h2>
        <Gif {...gifUnico}/>
        </>
    )
}

export default Detail;
