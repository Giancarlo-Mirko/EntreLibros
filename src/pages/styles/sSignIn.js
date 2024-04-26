import styled from 'styled-components';

// Your existing SignIn component code
export const ContentSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 90%;
  background-color: #ccc;

  @media (width >= ${({ theme }) => theme.media.mediaMD.width}) {
    /* padding: 0 30px; */
    max-width: 700px;
    flex-direction: row;
    max-height: 500px;
  }
`;

export const Saludo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 500px;
  width: 100%;
  background-color: black;
  padding: 20px;
  h2 {
    text-align: center;
    margin: 0 auto;
    font-size: 50px;
  }

  .imagen {
    width: 200px;
    height: 200px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (width >= ${({ theme }) => theme.media.mediaMD.width}) {
    height: 500px;
    width: 50%;
  }
`;
export const Informacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  color: black;
  background-color: #fff;

  @media (width >= ${({ theme }) => theme.media.mediaMD.width}) {
    height: 500px;
    width: 50%;
  }
`;

export const GoogleButton = styled.button`
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;
