import styled from 'styled-components';

export const Courses = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 940px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
