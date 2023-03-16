import { useState } from "react";
import SearchService from "../../sevices/SearchService.js";

const SearchForFilm = ({setResults}) => {

    const [searchWord, setsearchWord] = useState('')

    const handleChange = (searchWord) => {
        setsearchWord(searchWord);
    }

    const getProduct = (searchWord) => {
        SearchService(searchWord).then(res => {
            setResults(res)
        })
    }

    return(
        <div>
            <input type="text" 
            value={searchWord} 
            onChange={(e)=> handleChange(e.target.value)}
            />
            <button onClick={()=>{
                getProduct(searchWord)
            }}>SEARCH</button>
        </div>
    )
}

export default SearchForFilm

