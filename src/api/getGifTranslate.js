import { config } from "../config";

export const getGifTranslate = async (search_term, offset = 0, limit = 3) => {
  const api_key = config.api_key;
  const base_url = "https://api.giphy.com/v1/gifs/translate";
  const url = `${base_url}?api_key=${api_key}&s=${search_term}&limit=${limit}&offset=${offset}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  return {
    id: data.id,
    title: data.title,
    url: data.images.downsized_medium.url
  }
}
