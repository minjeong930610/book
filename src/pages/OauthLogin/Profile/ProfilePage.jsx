import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBack, setBackLogin, setTitle } from '../../../app/headerSlice';
import style from './ProfilePage.style';
import { getCurrentUser } from '../../../util/OauthApi';

const ProfilePage = () => {
  //Header
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBack(false));
    dispatch(setBackLogin(true));
    dispatch(setTitle('프로필 확인'));
    return () => {
      // second;
    };
  }, []);

  const [currentUser, setCurrentUser] = useState('');
  useEffect(() => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response);
      })
      .catch(error => {
        setCurrentUser('');
      });
  }, []);

  console.log(currentUser);
  const { ProfileBox, ImgBox, InfoBox } = style;
  return (
    <ProfileBox>
      <ImgBox>
        <img src={currentUser.imageUrl} alt="profileImg" />
      </ImgBox>
      <InfoBox>
        <h4>닉네임</h4>
        <input type="text" value={currentUser.name} placeholder="닉네임을 입력하세요." />
        <h4>이메일</h4>
        <h6>{currentUser.email}</h6>
      </InfoBox>
    </ProfileBox>
  );
};

export default ProfilePage;
