
import NavBar from "../components/NavBar"
import {
  MainBody, InpageNonMobileNav, InpageMobileNav
} from "./StyledPages"



const PageLayout = ({ children: Element }) => {
  return (
    <>
      <InpageNonMobileNav>
        <NavBar />
      </InpageNonMobileNav>
      <InpageMobileNav>
        <NavBar />
      </InpageMobileNav>
      <MainBody>
        {Element}
      </MainBody>
    </>
  );
}

export default PageLayout;