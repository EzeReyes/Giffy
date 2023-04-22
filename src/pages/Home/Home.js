import ListOfGif from "components/ListOfGif/ListOfGif";
import {useGifs} from 'Hooks/useGifs/useGifs';
import { useState } from 'react';
import "./Home.css"
import TrendingSearch from "components/TrendingSearchs/TrendingSearch"
import { useLocation } from "wouter";

const Home = () => {

    const[keyword,setKeyword] = useState();

    const {gif} = useGifs ();

    // eslint-disable-next-line no-use-before-define, no-unused-vars
    const[path,pushLocation] = useLocation();

    const handleSubmit = e => {

        //NAVEGAR EN OTRA RUTA
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }



    const handleChange = e => {
        setKeyword(e.target.value)
    }


return ( <>
    <div className="gridContainer">
        <div className="ult">
            <div  className='form'>
                        <h2>Buscar Gif</h2>
                        <form onSubmit={handleSubmit}>
                            <input className="text" onChange={handleChange} type="text" value={keyword} placeholder="Ingresa tu solicitud"/>
                            <input className='Buscar' type="submit" value="Buscar"/>
                        </form>
            </div>
            <h3 className='titleUlt'>Última busqueda</h3>
            <ListOfGif gif={gif}/>
        </div>
    </div>
    <div className="tend">
            <TrendingSearch/>
        </div>
</>)
}

export default Home;