
export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">GifExpertApp</h1>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item"> <a href="#trending" className="navbar__link">Trending</a> </li>
          <li className="navbar__item"> <a href="#translate" className="navbar__link">Translate</a> </li>
          <li className="navbar__item"> <a href="#search" className="navbar__link">Search</a> </li>
        </ul>
      </nav>
    </header>
  )
}
