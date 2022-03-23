import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  margin-right: 5px;
  position: relative;

  .image {
    max-height: 180px;
    width: 100%;
  }

  .icons {
    position: absolute;
    top: 10px;
    left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .description {
      .description__icon {
        color: red;
        font-size: 30px;

        &:hover {
          transition: all 0.2s ease-in-out;
          transform: scale(1.2);
        }
      }
    }

    .addToFavorites__icon {
      color: red;
      font-size: 40px;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
