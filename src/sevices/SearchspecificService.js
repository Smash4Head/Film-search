const SearchspecificService = async (searchWord) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3d46acaa&i=${searchWord}`) // 1000 uses 2023-03-16
    const products = await response.json()

    if(products === []){
        alert("No movie was found")
    }

    return products
}

export default SearchspecificService