import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding-top: 10px;

  .content {
    width: 70%;
    margin: 0 auto;

    .title {
      font-size: 40px;
      text-align: center;
      padding-top: 20px;
    }

    .links {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 50px;

      .link {
        font-weight: bold;
        color: white;
        font-size: 30px;
        padding: 80px;
        text-decoration: none;
        border-radius: 30px;
        transition: all 0.2s ease-in-out;
        background-color: #191970;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
          color: black;
        }
      }
    }
  }
`;
