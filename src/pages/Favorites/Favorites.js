import React from "react";
import Text from "components/Text";
import { FavoritesList } from "components/UserList/FavoritesList";
import { useLocalStorage } from "hooks/useLocalStorage";
import * as S from "./style";

const Favorites = () => {

    const [ favorites, setFavorites ] = useLocalStorage("favorites");

    return(
        <S.Home>
        <S.Content>
            <S.Header>
            <Text size="64px" bold>
                Favorites
            </Text>
            </S.Header>
            <FavoritesList favorites={favorites} setFavorites={setFavorites}/>
        </S.Content>
      </S.Home>
    )
}

export default Favorites;