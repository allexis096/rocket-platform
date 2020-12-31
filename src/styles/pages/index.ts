import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  }
`;

export const Header = styled.header`
  padding: 32px;

  > svg {
    margin: 10px 0 32px;
  }

  h1 {
    margin-top: 30px;
    font-size: 54px;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 30px;
      line-height: 60px;
    }
  }

  @media screen and (min-width: 768px) {
    > svg {
      margin: -55px 0 28px;
    }
  }
`;

export const Main = styled.div`
  background-color: #202024;
  margin: 0 32px 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    margin: unset;
    padding: 32px;
  }

  @media (min-width: 500px) and (max-width: 767px) {
    padding: 32px;
  }
`;

export const Content = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #8257e6;
    margin: 8px 0px 24px;
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const SignInButton = styled.button`
  background-color: #8257e6;
  text-transform: uppercase;
  font-weight: bold;
  border: 0px;
  font-size: 16px;
  color: #fff;
  padding: 0 1em 0 2.65em;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  transition: background-color 0.2s ease 0s;

  &:hover {
    background-color: #9f80e8;
  }
`;

export const CreateAccount = styled.div`
  position: relative;
  font-size: 14px;
  margin-top: 24px;
  color: #cccccc;
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;

  div {
    width: calc(50% - 25px);
    height: 1px;
    background: #28272f;
  }
`;

export const GithubAction = styled.div`
  display: flex;

  span {
    color: #e1e1e6;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 24px;
    align-self: center;
  }

  button {
    width: 100%;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 50px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    background-color: #29292e;
    transition: background-color 0.2s;

    > svg {
      margin-right: 8px;
      color: #8257e6;
      transition: color 0.2s ease 0s;
    }

    &:hover {
      background-color: #8257e6;

      svg {
        color: #fff;
      }
    }
  }
`;
