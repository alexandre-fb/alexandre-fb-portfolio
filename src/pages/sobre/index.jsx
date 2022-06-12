import styled from "styled-components";
import { MainSobre } from "../../components/MainPages/MainSobre";
import { PageStructureDefault } from "../../components/PageStructureDefault";

export const Sobre = () => {
  return (
    <PageStructureDefault hiddenHeaderSocialLinks>
      <MainSobre />
    </PageStructureDefault>
  );
};
