import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 72px;
`;

export const NavGroup = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;

  .buttons {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    margin-top: 5px;

    svg {
      color: ${props => props.theme.colors.span};
    }

    transition: background 0.2s ease 0s, color 0.2s ease 0s;
    &:hover {
      background: ${props => props.theme.colors.background};

      svg {
        color: ${props => props.theme.colors.text};
      }
    }
  }

  span {
    cursor: pointer;
    font-weight: bold;
  }

  img {
    cursor: pointer;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.tertiary};
  }
`;
