import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

    .form__input {
      height: 40px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
    }

    .form_button {
      width: 100px;
      height: 30px;
      font-size: 15px;
      font-weight: bold;
      background-color: #191970;
      color: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
        color: black;
      }
    }
  }
`;
