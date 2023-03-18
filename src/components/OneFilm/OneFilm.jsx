import { useState } from "react";

import SearchspecificService from "../../sevices/SearchspecificService";
import ViewFilm from "../ViewFilm/ViewFilm"

import styles from "./OneFilm.module.css"

const OneFilm = (props) => {

  //console.log(props.filmFromApi)
  const ApiMovies = props.filmFromApi

  console.log(ApiMovies)

  const [show, setShow] = useState(true)
  const [idmovie, setIdMovie] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [Results, setResults] = useState(true)

  const getmoviebyid = (searchWord) => {
    if(Results === false){
      setResults(true)
    }
    setShow(false)
    SearchspecificService(searchWord).then(res => {
        setIdMovie(res)
        setShowResults(!showResults)})
  }

  return (
    <div className={styles.container}>
      {
        show && ApiMovies?.map((item, index) => {
          return(
            <div key={index} className={styles.OneMovie}>
                <h2 className={styles.title}>{item.Title}</h2>
                <h3 className={styles.year}>({item.Year})</h3>
                <img className={styles.poster} src={item.Poster} alt="productimg"></img>
                <button className={styles.morebtn} onClick={()=>
                  getmoviebyid(item.imdbID)
                }>More</button>
            </div>
          )
        })
      }

      {showResults ? <ViewFilm idmovie={idmovie} setShow={setShow} Results={Results} setResults={setResults} setShowResults={setShowResults}/> : null}
    </div>
  );
}

export default OneFilm;