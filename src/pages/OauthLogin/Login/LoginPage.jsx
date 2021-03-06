import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBack, setBackLogin, setTitle } from '../../../app/headerSlice';
import style from './LoginPage.style';
import { ACCESS_TOKEN, NAVER_AUTH_URL, KAKAO_AUTH_URL } from '../../../util/OauthApi';
import loginLogo from '../../../assets/img/logo/Croods_The_Feedback.png';
import naverLogo from '../../../assets/img/logo/naver_logo.png';
import kakaoLogo from '../../../assets/img/logo/kakao_logo.png';

const LoginPage = () => {
  //Header
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem(ACCESS_TOKEN);
    dispatch(setBack(true));
    dispatch(setBackLogin(false));
    dispatch(setTitle('로그인'));
    return () => {
      // second;
    };
  }, []);

  const { SocialBox, TitleBox, NaverBtn, KaKaoBtn } = style;

  return (
    <SocialBox>
      <TitleBox>
        <img src={loginLogo} alt="" />
        <p>
          개인책방에 독서가족이 되어 <br />
          인사이트를 나눠보세요
        </p>
      </TitleBox>
      <NaverBtn href={NAVER_AUTH_URL}>
        <img src={naverLogo} alt="naver" />
        네이버 로그인
      </NaverBtn>
      <KaKaoBtn href={KAKAO_AUTH_URL}>
        <img src={kakaoLogo} alt="kakao" />
        카카오 로그인
      </KaKaoBtn>
    </SocialBox>
  );
};
export default LoginPage;
