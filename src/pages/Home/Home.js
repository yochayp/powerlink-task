import React, { useEffect, useState, useRef, useCallback } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import { useLocalStorage } from "hooks/useLocalStorage";
import CheckBox from "components/CheckBox";

const Home = () => {

  const { users, nationalities, isLoading, setNationalities, setPageNum } = usePeopleFetch();
  const [ favorites, setFavorites ] = useLocalStorage("favorites");

  const onNatChange = (e) => {
    let selectedNationalities = [...nationalities];
    if(e.target.checked)
    selectedNationalities.push(e.target.value);
    else
    selectedNationalities.splice(selectedNationalities.indexOf(e.target.value), 1);
    setNationalities(selectedNationalities);
  }

  return (
    // <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <S.Filters>
          <CheckBox value="BR" label="Brazil" onChange={onNatChange} />
          <CheckBox value="AU" label="Australia" onChange={onNatChange}/>
          <CheckBox value="CA" label="Canada" onChange={onNatChange}/>
          <CheckBox value="DE" label="Germany" onChange={onNatChange}/>
          <CheckBox value="FR" label="France" onChange={onNatChange}/>
        </S.Filters>
        <UserList users={users} isLoading={isLoading} favorites={favorites} setFavorites={setFavorites} setPageNum={setPageNum} />
      </S.Content>
    // </S.Home>
  );
};

export default Home;
