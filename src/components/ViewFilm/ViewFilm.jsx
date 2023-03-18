import styles from "./ViewFilm.module.css"

const ViewFilm = ({idmovie, setShow, Results, setResults, setShowResults}) => {
  
    //console.log(idmovie)
    //console.log(props.imdbID)

    const ID = idmovie

    const backtomovies = () => {
       setShowResults(false)
       setShow(true)
     }

    return (
        Results && <div>
            <div className={styles.titlebox}>
                <h2 className={styles.title}>{ID.Title} ({ID.Year})</h2>
            </div>

            <div className={styles.viewfilm}>
                <img className={styles.image} src={ID.Poster} alt=""/>
                <div className={styles.filminfo}>
                    <p className={styles.infotext}><b>Plot:</b> {ID.Plot}</p>
                    <p className={styles.infotext}><b>Genre:</b> {ID.Genre}</p>
                    <p className={styles.infotext}><b>Actors:</b> {ID.Actors}</p>
                    <p className={styles.infotext}><b>Writer:</b> {ID.Writer}</p>
                    <p className={styles.infotext}><b>Runtime:</b> {ID.Runtime}</p>
                    <p className={styles.infotext}><b>Released:</b> {ID.Released}</p>
                    <p className={styles.infotext}><b>Production:</b> {ID.Production}</p>
                </div>
            </div>

            <button className={styles.backbtn} onClick={()=>{
                setResults(false)
                backtomovies()}
                }>BACK</button>

        </div>
    );

}

export default ViewFilm