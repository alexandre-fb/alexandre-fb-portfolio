import { MainContact } from "../../components/MainPages/MainContact";
import { PageStructureDefault } from "../../components/PageStructureDefault";

export const Contato = () => {
  return (
    <PageStructureDefault hiddenHeaderLogo hiddenHeaderSocialLinks>
      <MainContact />
    </PageStructureDefault>
  );
};
