import { GifItem } from "./GifItem"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { InputForm } from "./InputForm";
import { useFetchGifsSearch } from "../hooks/useFetchGifsSearch";

export const Search = () => {
  
  const { onInputSubmit, handleNext, handlePrev, loading, gifs } = useFetchGifsSearch();
  
  return (
    <section id="search">
      <h2 className="section__title">Search</h2>
      <InputForm placeholder="Find your gifs" onInputSubmit={ onInputSubmit } />
      <div className="search-container">
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
