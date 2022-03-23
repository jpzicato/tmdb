import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  padding: 5px 0;
  margin-left: 50px;
  margin-right: 40px;

  .form {
    flex-direction: row;
    align-items: center;

    .dropdown__container {
      margin-bottom: 10px;

      .label {
        color: white;
      }

      .select {
        width: 135px;
        color: white;
      }
    }

    .search {
      cursor: pointer;
      margin-left: 5px;
      color: white;
      margin-top: 5px;
    }
  }
`;
