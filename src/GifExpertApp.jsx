import { Header } from "./componentes/Header"
import { Search } from "./componentes/Search"
import { Translate } from "./componentes/Translate"
import { Trending } from "./componentes/Trending"

export const GifExpertApp = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Trending />
        <Translate />
        <Search />
      </div>
    </>
  )
}
