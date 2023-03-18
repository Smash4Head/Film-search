import { useRef } from "react";
import SearchService from "../../sevices/SearchService.js";

import styles from "./SearchForFilm.module.css"

const SearchForFilm = ({setResults}) => {

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

    return(
        <div className={styles.containersearch}>
            <input type="text" 
            ref={inputRef}
            placeholder='Enter movie name'
            className={styles.movieinput}
            />

            <button className={styles.searchbtn} onClick={handleChange}>SEARCH</button>

        </div>  
        
    )
}

export default SearchForFilm

