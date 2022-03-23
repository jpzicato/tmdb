import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #191970;
  height: 70px;

  .title {
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
  }

  .links {
    .link {
      color: rgba(255, 255, 255, 1);
      margin-right: 30px;
      text-decoration: none;
      font-size: 20px;
      text-decoration: none;
      padding: 5px;
      border-radius: 5px;
      font-weight: bold;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: black;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }

    .active {
      color: black;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .rightSide {
    display: flex;
    align-items: center;

    .rightSide__logout {
      font-size: 15px;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0);
      color: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: black;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
