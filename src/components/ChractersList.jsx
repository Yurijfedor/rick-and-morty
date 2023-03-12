import { useSelector } from "react-redux";
import { selectVisibleCharacters, selectFilterValue } from "../redux/selectors";
import {
  CharactersListStyled,
  ImgStyled,
  LinkStyled,
  CardTitle,
  Race,
  CardContentWrapp,
  ItemStyled,
} from "./CharactersList.styled";

export const CharactersList = () => {
  const characters = useSelector(selectVisibleCharacters);
  const filterValue = useSelector(selectFilterValue);

  return (
    <CharactersListStyled>
      {characters.length !== 0 ? (
        characters.map((character) => {
          return (
            <ItemStyled key={character.id}>
              <LinkStyled to={`/${character.name}`}>
                <ImgStyled src={character.image} alt={character.name} />
                <CardContentWrapp>
                  <CardTitle>{character.name}</CardTitle>
                  <Race>{character.species}</Race>
                </CardContentWrapp>
              </LinkStyled>
            </ItemStyled>
          );
        })
      ) : (
        <h2>{`Sorry, we didn't find any characters with the name ${filterValue}`}</h2>
      )}
    </CharactersListStyled>
  );
};
