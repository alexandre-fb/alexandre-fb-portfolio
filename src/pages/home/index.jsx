import { PageStructureDefault } from "../../components/PageStructureDefault";
import { MainHome } from "../../components/MainPages/MainHome";

export const Home = () => {
  return (
    <PageStructureDefault hiddenHeaderLogo>
      <MainHome />
    </PageStructureDefault>
  );
};
