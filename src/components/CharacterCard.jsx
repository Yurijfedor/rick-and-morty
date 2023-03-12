import { ImgStyled, NameStyled } from "./CharacterCard.styled";
import { Information } from "./Information";
export const CharacterCard = ({ character }) => {
  console.log(character);
  return (
    <>
      <ImgStyled src={character.image} alt={character.name} />
      <NameStyled>{character.name}</NameStyled>
      <Information character={character} />
    </>
  );
};
