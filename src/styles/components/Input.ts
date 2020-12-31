import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:nth-child(1) {
    margin-bottom: 10px;
  }

  > svg {
    position: absolute;
    top: 15px;
    left: 12px;
  }

  .eye-password {
    left: unset;
    right: 15px;
    color: #8257e6;
    cursor: pointer;
  }

  input {
    background-color: #121214;

    border: 2px solid #121214;
    font-size: 16px;
    color: #fff;
    padding: 0 1em 0 2.65em;
    border-radius: 5px;
    height: 50px;
    width: 100%;

    &:focus {
      border: 2px solid #8257e6;
    }
  }
`;
