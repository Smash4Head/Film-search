const SearchService = async (searchWord) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3d46acaa&s=${searchWord}`) // 1000 uses 2023-03-16
    const products = await response.json()
    return products
}

export default SearchService

// `http://www.omdbapi.com/?apikey=3d46acaa&s=${searchWord}
