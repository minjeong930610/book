import styled from 'styled-components';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  border: 1px solid green;
`;

const ImgBox = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0 auto 5.2rem auto;
  background: ${({ theme }) => theme.colors.$white4};
  img {
    border-radius: 0.4rem;
  }
`;

const InfoBox = styled.div`
  text-align: left;
  width: 30rem;
  margin: 0 auto;
  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1.3rem;
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.$white4};
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.colors.$black4};
    width: 30rem;
    padding: 1.3rem 0 1.3rem 1.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.$white1};
    margin-bottom: 3.9rem;
  }

  h6 {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
const style = { ProfileBox, ImgBox, InfoBox };
export default style;
