import styled from 'styled-components';

export const Container = styled.div`
  .switch-button {
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    align-items: center;
    margin: -50px auto;
    height: 100vh;

    grid-template-areas:
      'switch switch'
      'header main';

    .switch-button {
      grid-area: switch;
      margin: 0 auto;
      left: 3%;
    }
  }
`;

export const Header = styled.header`
  padding: 32px;
  grid-area: header;

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
  background-color: ${props => props.theme.colors.secondary};
  margin: 0 32px 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  grid-area: main;

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
    color: ${props => props.theme.colors.primary};
    margin: 8px 0px 24px;
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const SignInButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  border: 0px;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  padding: 0 1em 0 2.65em;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  transition: background-color 0.2s ease 0s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;

export const CreateAccount = styled.div`
  position: relative;
  font-size: 14px;
  margin-top: 24px;
  color: ${props => props.theme.colors.span};
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;

  div {
    width: calc(50% - 25px);
    height: 1px;
    background: ${props => props.theme.colors.divider};
  }
`;

export const GithubAction = styled.div`
  display: flex;

  span {
    color: ${props => props.theme.colors.tertiary};
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
    color: ${props => props.theme.colors.text};
    height: 50px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    background-color: ${props => props.theme.colors.button};
    transition: background-color 0.2s;

    > svg {
      margin-right: 8px;
      color: ${props => props.theme.colors.primary};
      transition: color 0.2s ease 0s;
    }

    &:hover {
      background-color: ${props => props.theme.colors.primary};

      svg {
        color: ${props => props.theme.colors.text};
      }
    }
  }
`;
