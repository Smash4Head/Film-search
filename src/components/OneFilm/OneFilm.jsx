import React from "react"

const OneProduct = (props) => {

  console.log(props.filmFromApi)
  const items = props.filmFromApi

  return (
    <div>
      {
        items && items.map((item, index) => {
          return(
            <div key={index}>
                <h2>{item.Title}</h2>
                <img src={item.Poster} alt="productImg"></img>
            </div>
          )
        })
      }
    </div>
  );
}

export default OneProduct;