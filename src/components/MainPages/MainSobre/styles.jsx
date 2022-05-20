import styled from "styled-components";

export const ContainerData = styled.div``;
export const ImageAndLinks = styled.div``;
export const TextAndButton = styled.div``;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  ${ContainerData} {
    display: flex;
    gap: 40px;
    margin: 0 auto;

    ${ImageAndLinks} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    ${TextAndButton} {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-size: 2rem;
      }

      h4 {
        font-size: 1.2rem;
      }

      p {
        line-height: 1.4rem;
      }

      a {
        margin-top: 20px;
        width: fit-content;
      }
    }
  }
`;
