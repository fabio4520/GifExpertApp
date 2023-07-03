import { InputForm } from "./InputForm"
import { GifItem } from "./GifItem";
import { useFetchGifTranslate } from "../hooks/useFetchGifTranslate";

export const Translate = () => {

  const { loading, gif, onInputSubmit } = useFetchGifTranslate();  

  return (
    <section id="translate">
      <h2 className="section__title">Translate</h2>
      <InputForm placeholder="Converts words and phrases to the perfect GIF." onInputSubmit={ onInputSubmit } />
      <div className="translate-container" >
        <div className="card-grid">
          {
            loading
              ? <p>Loading...</p>
              : (<GifItem key={gif.id} url={gif.url} title={gif.title} />)
          }
        </div>
      </div>
    </section>
  )
}
