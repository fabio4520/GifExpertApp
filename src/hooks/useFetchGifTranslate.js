import { useEffect, useState } from "react";
import { getGifTranslate } from "../api/getGifTranslate";

export const useFetchGifTranslate = () => {
  const [target, setTarget] = useState('Ryan Reynolds');
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const onInputSubmit = (target) => {
    setTarget(target);
  }

  useEffect(() => {
    setLoading(true);
    const getNewGifs = async () => {
      if (target.length <= 1) return;
      const newGif = await getGifTranslate(target);
      setGif(newGif);
      setLoading(false);
    }
    getNewGifs();
  }, [target])

  return {
    target,
    gif,
    loading,
    onInputSubmit
  }
}
