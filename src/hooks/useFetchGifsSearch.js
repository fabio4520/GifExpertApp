import { useEffect, useState } from "react";
import { getGifSearch } from "../api/getGifSearch";


export const useFetchGifsSearch = () => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [target, setTarget] = useState('CR7');

  const handleNext = () => {
    setOffset(offset + 3);
  }

  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - 3);
    }
  }

  const onInputSubmit = (target) => {
    setTarget(target);
  }

  useEffect(() => {
    setLoading(true);
    const getNewGifs = async () => {
      const newGifs = await getGifSearch(target, offset);
      setGifs(newGifs);
      setLoading(false);
    }
    getNewGifs();
  }, [target,offset])

  return {
    onInputSubmit,
    handleNext,
    handlePrev,
    loading,
    gifs
  }
}
