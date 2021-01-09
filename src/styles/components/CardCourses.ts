import styled, { css } from 'styled-components';

interface CardProps {
  name: 'discover' | 'gostack' | 'expert';
}

export const Container = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-left: 30px;
  }

  &:nth-child(2) {
    margin: 0 25px;
  }

  &:last-child {
    margin-right: 30px;
  }

  transition: all 0.2s ease 0s;
  &:hover {
    transform: translateY(-7px);
  }

  ${props =>
    props.name === 'discover' &&
    css`
      border-bottom: 2px solid #8257e6;
    `};

  ${props =>
    props.name === 'gostack' &&
    css`
      border-bottom: 2px solid #65d462;
    `};

  ${props =>
    props.name === 'expert' &&
    css`
      border-bottom: 2px solid #d6ac4e;

      &:last-child {
        main {
          margin-top: 100px;
        }
      }
    `};
`;

export const Card = styled.section`
  background: ${props => props.theme.colors.secondary};
  padding: 60px 60px;
  height: 540px;
  width: 100%;
  margin-top: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin-top: 30px;
    line-height: 25px;
    color: ${props => props.theme.colors.textCard};
  }
`;
