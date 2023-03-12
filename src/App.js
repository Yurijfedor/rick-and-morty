import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Characters = lazy(() => import("./pages/Home"));
const CharactersCard = lazy(() => import("./pages/CharactersCard"));
const Layout = lazy(() => import("./components/layout"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="/:characterName" element={<CharactersCard />} />
      </Route>
    </Routes>
  );
};
