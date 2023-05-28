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

  &:hover {
    color: #ffffff;
    background-color: blue;
  }
`;
