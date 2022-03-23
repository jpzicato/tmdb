import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: -20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .gradient {
    padding-top: 150px;
    padding-bottom: 350px;

    .container {
      height: 580px;
      background-color: rgba(0, 0, 0, 0.9);
      color: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: column;

      .container__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        margin-top: 15px;

        .header__button {
          border-radius: 3px;
          transition: all 0.2s ease-in;
          font-size: 35px;

          &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.9);
            color: rgba(0, 0, 0, 0.9);
          }
        }
      }

      .container__image {
        max-height: 250px;
        margin-bottom: 25px;
        margin-top: 25px;
        object-fit: contain;
      }

      .container__overview {
        max-width: 70%;
        margin: 0 auto;
      }
    }
  }
`;
