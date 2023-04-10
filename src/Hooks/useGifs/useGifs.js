import {useContext, useEffect} from "react";
import getGifs from "../../services/getGifs";
import GifContext from "../../Context/GifContext";

export function useGifs ({keyword}={ keyword: "" }) {

    const {gif, setGif} = useContext(GifContext); 

    useEffect(function (){
            // Se toma la Keyword
        const keywordToUSe = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordToUSe })
        .then(gifs => { 
        setGif(gifs)
      // Se guarda la Keyword
      localStorage.setItem('lastKeyword', keyword)})
    }, [keyword, setGif])
    return{gif} 
  }

