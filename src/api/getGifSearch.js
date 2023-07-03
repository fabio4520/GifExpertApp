import { config } from "../config";

export const getGifSearch = async (category, offset = 0, limit = 3) => { 
  const api_key = config.api_key;
  const base_url = "https://api.giphy.com/v1/gifs/search";
  const url = `${base_url}?api_key=${api_key}&q=${category}&limit=${limit}&offset=${offset}`
  const resp = await fetch(url)
  const {data} = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })

  return gifs
}
