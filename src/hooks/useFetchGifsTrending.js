import { useState, useEffect } from "react";
import { getGifTrending } from "../api/getGifTrending";

export const useFetchGifsTrending = () => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleNext = () => {
    setOffset(offset + 3);
  }

  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - 3);
    }
  }

  useEffect(() => {
    setLoading(true);
    const getNewGifs = async () => {
      const newGifs = await getGifTrending(offset);
      setGifs(newGifs);
      setLoading(false);
    }
    getNewGifs();
  }, [offset])

  return {
    gifs,
    loading,
    handleNext,
    handlePrev
  }
}
