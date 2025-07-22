import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layouts/Layot";
import { CardPage, FavoritePage, SearchPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
