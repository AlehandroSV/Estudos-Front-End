import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    padding: 2rem 1.875rem;

    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding: 3rem;
    }
  }
`;
