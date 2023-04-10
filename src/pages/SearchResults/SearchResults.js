import React from "react";
import ListOfGif from '../../components/ListOfGif/ListOfGif';
import {useGifs} from "../../Hooks/useGifs/useGifs";


const SearchResults = ({params}) => { 
    const {keyword} = params
    const {gif} = useGifs({keyword});
    return <>
    <div className="gridContainer">
    <ListOfGif gif={gif}/>     
    </div>
    </>}

export default SearchResults;