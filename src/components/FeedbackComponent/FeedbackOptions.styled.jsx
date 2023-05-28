import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.button`
  width: 100px;
  font-size: 22px;
  background-color: yellow;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    background-color: blue;
  }
`;
