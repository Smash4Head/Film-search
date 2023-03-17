import SearchForFilm from "../SearchForFilm/SearchForFilm"
import OneFilm from "../OneFilm/OneFilm"
import Main from "../Main/Main"

import { useState } from "react"

const ViewFilm = ({idmovie, setShow, wow, setWow, setShowResults}) => {
  
    console.log(idmovie)
    //console.log(props.imdbID)

    console.log('labas')

    const ID = idmovie

    const backtomovies = () => {
       console.log('labas')
       setShowResults(false)
       setShow(true)
     }

    return (
        wow && <div className='pagr-div'>
            <img className='belekas' src={ID.Poster} alt=""/>
            <p><b>Title:</b> {ID.Title}</p>
            <p><b>Plot:</b> {ID.Plot}</p>
            <p><b>Genre:</b> {ID.Genre}</p>
            <p><b>Actors:</b> {ID.Actors}</p>
            <p><b>Writer:</b> {ID.Writer}</p>
            <p><b>Runtime:</b> {ID.Runtime}</p>
            <p><b>Released:</b> {ID.Released}</p>
            <p><b>Production:</b> {ID.Production}</p>
            <button className='button-28' onClick={()=>{
                setWow(false)
                backtomovies()}
                }>BACK</button>

        </div>
    );

}

export default ViewFilm