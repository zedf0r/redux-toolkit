import { Link } from "react-router-dom";
import style from "./Header.module.css";

export const Header = () => {
  return (
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
  );
};
