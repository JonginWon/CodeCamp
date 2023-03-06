import LayoutHerder from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import { Wrapper } from "./layoutStyles";

interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <LayoutHerder />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
