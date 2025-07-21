import { Route, Routes } from "react-router";
import { CardPage, SearchPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path=":id" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
