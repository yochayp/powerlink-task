import React, { useState, useRef, useCallback } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";


const UserList = ({ users, isLoading ,favorites, setFavorites, setPageNum}) => {
  
  const [ hoveredUserId, setHoveredUserId ] = useState();
  
  const observer = useRef();

  const lastElementRef = useCallback(element => {

    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if ( entries[0].isIntersecting ) {
        setPageNum(prevPageNum => prevPageNum + 1)
      }
    })
    if (element) {
      observer.current.observe(element)
    }
  }, [])

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  
  const updateFavorites = (user) => {
    if(favorites[user.email]){
      let prevFavorites = {...favorites};
      delete prevFavorites[user.email]
      setFavorites(prevFavorites)
    } else{
      setFavorites({...favorites,[user.email]: user})
    }
  }

  return (
    <S.UserList>
      <S.List>
      {users.map((user, index) => {
              return (<S.User
                {...(users.length === index + 1 ? {ref: lastElementRef} : {})} 

                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId || favorites[user.email]} onClick={()=> updateFavorites(user)}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
            )
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
