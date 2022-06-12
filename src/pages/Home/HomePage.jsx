import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBack, setTitle, setLocation, setSearch, setTrash, setFavorite } from '../../app/headerSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //chatting 방 정보 api
    dispatch(setBack(true));
    dispatch(setTitle('우리집'));
    dispatch(setLocation(true));
    dispatch(setSearch(true));
    dispatch(setTrash(true));
    dispatch(setFavorite(true));
    return () => {
      // second;
    };
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
