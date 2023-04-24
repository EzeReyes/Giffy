import {useContext, useEffect, useState} from "react";
import getGifs from "services/getGifs";
import GifContext from "Context/GifContext";

const INITIAL_PAGE = 0;

export function useGifs ({keyword}={ keyword: "" }) {

    const {gif, setGif} = useContext(GifContext); 
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loadingNextPages, setLoadingNextPages] = useState(false);
    const [loading, setLoading] = useState(false)

    const keywordToUSe = keyword || localStorage.getItem('lastKeyword') || 'random'


    useEffect(function (){
            // Se toma la Keyword
        setLoading(true)
        getGifs({ keyword: keywordToUSe })
        .then(gifs => { 
        setGif(gifs)
        setLoading(false)
      // Se guarda la Keyword
      localStorage.setItem('lastKeyword', keyword)})
    }, [keyword, keywordToUSe, setGif])

    useEffect(function () {
      if (page===INITIAL_PAGE) return

      setLoadingNextPages(true)

      getGifs({keyword: keywordToUSe, page})
      .then(nextGifs => {
        setGif(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPages(false)
      })
    }, [keywordToUSe, page, setGif])

    return{gif, loadingNextPages, setPage, loading}  
  }

