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
    color: ${props => props.theme.colors.primary};
    transition: color 0.2s ease 0s;
    cursor: pointer;
  }

  input {
    background-color: ${props => props.theme.colors.background};

    border: 2px solid ${props => props.theme.colors.background};
    font-size: 16px;
    color: ${props => props.theme.colors.tertiary};
    padding: 0 1em 0 2.65em;
    border-radius: 5px;
    height: 50px;
    width: 100%;

    &:focus {
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
`;
