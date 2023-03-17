const SearchService = async (searchWord) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=3d46acaa&s=${searchWord}`) // 1000 uses 2023-03-16
    const products = await response.json()

    if(products === []){
        alert("No movie was found")
    }

    return products
}

export default SearchService

// `http://www.omdbapi.com/?apikey=3d46acaa&s=${searchWord}
