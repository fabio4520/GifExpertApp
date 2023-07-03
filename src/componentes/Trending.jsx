import { GifItem } from "./GifItem"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useFetchGifsTrending } from "../hooks/useFetchGifsTrending";

export const Trending = () => {
  
  
  const { gifs, loading, handleNext, handlePrev } = useFetchGifsTrending();
  

  return (
    <section id="trending">
      <h2 className="section__title">Trending</h2>
      <div className="trending-container">
        <button onClick={handlePrev}> <BsFillArrowLeftCircleFill className="arrow arrow--left" /> </button>
        {
          loading
            ? <p>Loading...</p>
            : ( <div className="card-grid">
                  {
                    gifs.map(gif => (
                      <GifItem key={gif.id} url={gif.url} title={ gif.title } />
                    ))
                  }
                </div>)
        }
        <button onClick={handleNext}> <BsFillArrowRightCircleFill className="arrow arrow--right" /> </button>
      </div>
    </section>
  )
}
