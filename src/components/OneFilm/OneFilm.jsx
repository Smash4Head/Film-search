import { useState } from "react";

import SearchspecificService from "../../sevices/SearchspecificService";
import ViewFilm from "../ViewFilm/ViewFilm"

const OneFilm = (props) => {

  //console.log(props.filmFromApi)
  const ApiMovies = props.filmFromApi

  console.log(ApiMovies)

  const [show, setShow] = useState(true)
  const [idmovie, setIdMovie] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [wow, setWow] = useState(true)

  const getmoviebyid = (searchWord) => {
    if(wow === false){
        setWow(true)
    }
    setShow(false)
    SearchspecificService(searchWord).then(res => {
        setIdMovie(res)
        setShowResults(!showResults)})
  }

  return (
    <div className="OneFilm">
      {
        show && ApiMovies?.map((item, index) => {
          return(
            <div key={index}>
                <h2>{item.Title}</h2>
                <img src={item.Poster} alt="productimg"></img>
                <button onClick={()=>
                  getmoviebyid(item.imdbID)
                }>more</button>
            </div>
          )
        })
      }

      {showResults ? <ViewFilm idmovie={idmovie} setShow={setShow} wow={wow} setWow={setWow} setShowResults={setShowResults}/> : null}
    </div>
  );
}

export default OneFilm;