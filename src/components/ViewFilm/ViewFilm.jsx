import SearchForFilm from "../SearchForFilm/SearchForFilm"
import OneFilm from "../OneFilm/OneFilm"
import Main from "../Main/Main"

import { useState } from "react"

const ViewFilm = (props) => {
  
    //console.log(props)
    //console.log(props.imdbID)

    //const ID = SearchspecificService(props)
    
    const [wow, setWow] = useState(true)
    const [show, setShow] = useState(true)

    const backtomovies = () => {
        console.log('labas')
        setWow(!wow)
        setShow(!show)
      }

    return (
        wow && <div className='pagr-div'>
            <img className='belekas' src={props.idmovie.Poster} alt=""/>
            <p><b>Title:</b> {props.idmovie.Title}</p>
            <p><b>Plot:</b> {props.idmovie.Plot}</p>
            <p><b>Genre:</b> {props.idmovie.Genre}</p>
            <p><b>Actors:</b> {props.idmovie.Actors}</p>
            <p><b>Writer:</b> {props.idmovie.Writer}</p>
            <p><b>Runtime:</b> {props.idmovie.Runtime}</p>
            <p><b>Released:</b> {props.idmovie.Released}</p>
            <p><b>Production:</b> {props.idmovie.Production}</p>
            <button className='button-28' onClick={() => backtomovies()}>BACK</button>

            {show && <OneFilm/>}

        </div>
    );

}

export default ViewFilm