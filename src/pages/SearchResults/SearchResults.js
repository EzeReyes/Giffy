import React from "react";
import ListOfGif from 'components/ListOfGif/ListOfGif';
import {useGifs} from "Hooks/useGifs/useGifs";


const SearchResults = ({params}) => { 
    const {keyword} = params
    const {gif,setPage} = useGifs({keyword});

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <>
    <div className="gridContainer">
    <ListOfGif gif={gif}/>     
    </div>
    <button onClick={handleNextPage}>Get next page</button>
    </>}

export default SearchResults;