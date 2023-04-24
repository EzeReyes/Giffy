import React, {useEffect, useRef, useCallback} from "react";
import ListOfGif from 'components/ListOfGif/ListOfGif';
import {useGifs} from "Hooks/useGifs/useGifs";
import useNearScreen from "Hooks/useNearScreen/useNearScreen";
import debounce from "just-debounce-it";


const SearchResults = ({params}) => { 
    const {keyword} = params
    const {gif,setPage, loading} = useGifs({keyword});
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen( {externalRef: loading ? null : externalRef, once: false})
    // const debounceHandleNextPage = useRef()
    console.log(isNearScreen)
    // const handleNextPage = () => setPage(prevPage => prevPage + 1)

    // const handleNextPage = () => console.log('next page')

    const debounceHandleNextPage =  useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 1000
    ),[])

    useEffect(function() {
        if (isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])

    return <>
    <div className="gridContainer">
    <ListOfGif gif={gif}/>     
    </div>
    <div id="visor" ref={externalRef}></div>
    {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>}

export default SearchResults;