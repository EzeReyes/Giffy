import { API_KEY, API_URL, LIMIT} from "./settings";

const getGifs = ( {keyword, page = 0} = {} ) => {  
    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${LIMIT}&offset=${page * LIMIT}&rating=g&lang=en`;
    return (
    fetch(url)
    .then(res => res.json())
    .then(response => {
        const {data} = response
        const gifs = data.map(image => { const {images, title, id } = image;
        const {url} = images.downsized_medium;
        return {title,id,url} })
        return gifs
    }) )
}


export default getGifs;