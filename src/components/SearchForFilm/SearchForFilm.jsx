import { useState, useRef } from "react";
import SearchService from "../../sevices/SearchService.js";
import OneFilm from "../OneFilm/OneFilm.jsx";

const SearchForFilm = () => {

    const [filmFromApi, setfilmFromApi] = useState([])

    const setResults = (products) => {
        setfilmFromApi(products)
    }

    const inputRef = useRef(null);

    const handleChange = () => {
        getProduct(inputRef.current.value);
        inputRef.current.value = ""
    }

    const getProduct = (searchWord) => {
        SearchService(searchWord).then(res => {
            setResults(res)
        })
    }

    console.log(filmFromApi)

    return(
        <div>
            <input type="text" 
            ref={inputRef}
            placeholder='Enter movie name'
            />

            <button onClick={handleChange}>SEARCH</button>

            <OneFilm filmFromApi={filmFromApi.Search}/> 
        </div>
    )
}

export default SearchForFilm

