import { Container} from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const PageStructureDefault = ({
    hiddenHeaderLogo,
    hiddenHeaderSocialLinks,
    children,
}) => {



  return (
    <Container>
      <Header hiddenHeaderLogo={hiddenHeaderLogo} hiddenHeaderSocialLinks={hiddenHeaderSocialLinks} />
      { children }
      <Footer />
    </Container>
  );
};
