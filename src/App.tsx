import { Link, Route, Routes } from "react-router";
import { CardPage, FavoritePage, SearchPage } from "./pages";
import style from "./App.module.css";

function App() {
  return (
    <>
      <header className={style.header}>
        <nav>
          <ul className={style.list}>
            <li className={style.list__item}>
              <Link to="/" className={style.item__link}>
                Главная
              </Link>
            </li>
            <li className={style.list__item}>
              <Link to="/favorite" className={style.item__link}>
                Избранное
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
