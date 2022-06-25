import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [ users, setUsers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ nationalities, setNationalities ] = useState([]);
  const [ pageNum, setPageNum ] = useState(1);

  useEffect(() => {
    fetch(appendUsers);
  }, [ pageNum ]);

  useEffect(() => {
    fetch(resetUsers);
  }, [ nationalities ]);

  async function fetch(setData) {
    setIsLoading(true);
    const response = await  axios({
      method: 'GET',
      url: `https://randomuser.me/api/?results=25&page=${pageNum}&nat=${nationalities}`
    })
    setIsLoading(false);
    setData(response.data.results);
  }

  const appendUsers = (data) => {
    setUsers([...users,...data]);
  }

  const resetUsers = (data) =>{
    setUsers(data);
  }

  return { users, nationalities, isLoading, setNationalities, setPageNum };
};
