import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCharacters } from "../redux/selectors";
import { Header } from "../components/Header";
import { CharacterCard } from "../components/CharacterCard";

const CharactersCard = () => {
  const characterName = useParams();
  const characters = useSelector(selectCharacters);
  const [character] = characters.filter(
    (item) => item.name === characterName.characterName
  );
  return (
    <>
      <Header />
      <CharacterCard character={character} />
    </>
  );
};

export default CharactersCard;
