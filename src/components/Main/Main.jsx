import React from "react"

import SearchForFilm from "../SearchForFilm/SearchForFilm.jsx";
import OneFilm from "../OneFilm/OneFilm.jsx";

import { useState } from "react";

const Main = () => {

    const [filmFromApi, setfilmFromApi] = useState([])

    const setResults = (products) => {
        setfilmFromApi(products)
    }

    //console.log(filmFromApi)
    
    return(
        <div>
            <SearchForFilm setResults={setResults}/>
            <OneFilm filmFromApi={filmFromApi.Search}/>
        </div>
    )
}

export default Main

//            <ViewFilm choosen={choosen} goBack={goBack}/>