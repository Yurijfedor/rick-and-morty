import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Logo } from "../components/logo";
import { Filter } from "../components/Filter";
import { CharactersList } from "../components/ChractersList";
import { fetchAllCharacters } from "../redux/operations";

const Characters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  return (
    <>
      <Logo />
      <Filter />
      <CharactersList />
    </>
  );
};

export default Characters;
