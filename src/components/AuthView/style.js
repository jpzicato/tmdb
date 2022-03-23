import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  height: 100vh;
  background-color: #191970;

  .header {
    padding-top: 80px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .header__image {
      object-fit: contain;
      height: 150px;
      margin-left: 30px;
    }
    .header__title {
      color: rgba(255, 255, 255, 1);
    }
  }

  .container {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;

    .container__title {
      color: rgba(0, 0, 0, 1);
      margin-left: 25px;
    }

    .description {
      margin-top: 25px;
      margin-left: 25px;
      cursor: pointer;
    }
  }
`;
