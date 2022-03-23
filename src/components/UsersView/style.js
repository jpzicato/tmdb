import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  padding-top: 1px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);

  .name {
    padding-left: 30px;
  }

  .email {
    padding-left: 30px;
  }

  .favorites {
    .favorites__title {
      text-align: center;
    }

    .favorites__container {
      display: flex;
      justify-content: space-evenly;

      .container__title {
        text-align: center;
      }
    }
  }
`;
