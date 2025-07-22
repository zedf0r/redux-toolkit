import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { CardPage, FavoritePage, SearchPage } from "../../pages";

export const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  );
};
