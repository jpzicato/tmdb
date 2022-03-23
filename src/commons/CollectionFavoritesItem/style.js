import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  .list {
    display: flex;
    align-items: center;

    .list__item {
      text-align: center;
    }

    .icon {
      cursor: pointer;
      color: red;

      &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.25);
      }
    }
  }
`;
