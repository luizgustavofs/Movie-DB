import api from "."

const getData = async (setData, url) => {
  const result = await api.get(url)

  setData(result.data.results)
  console.log(result.data.results)
}

// discover/movie
// trending/all/day
// movie/now_playing
// movie/popular
// movie/top_rated

export {getData}