import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  background: ${(props) => props.theme.colors.container};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100%;

  padding: 20px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }
`;
