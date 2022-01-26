import { Layout } from "antd";
import styled from "styled-components";
import { colors } from "utils/colors";
import { AppFooter } from "./AppFooter";
import AppHeader from "./AppHeader";

const { lowGray } = colors;

const ResponsiveLayout = styled(Layout)`
  padding: 1.5em 2em;
  background: ${lowGray};

  @media (max-width: 991px) {
    padding: 0.5em 1em;
  }
`;

const ContentLayout = styled(Layout)`
  margin: 0;
  padding: 0;
  min-height: 60em;
`;

const MainLayout = ({ children }) => (
  <>
    <AppHeader />
    <ResponsiveLayout theme="light">
      <ContentLayout>{children}</ContentLayout>
    </ResponsiveLayout>
    <AppFooter />
  </>
);

export default MainLayout;
