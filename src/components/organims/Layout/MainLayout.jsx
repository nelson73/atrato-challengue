import { Layout } from "antd";
import styled from "styled-components";
import { colors } from "utils/colors";
import { AppFooter } from "./AppFooter";
import AppHeader from "./AppHeader";

const { lowGray } = colors;
const { Content } = Layout;

const ResponsiveLayout = styled(Layout)`
  padding: 1.5em 2em;
  background: ${lowGray};

  @media (max-width: 768px) {
    padding: 0.5em 1em;
  }
`;

const MainLayout = ({ children }) => (
  <>
    <AppHeader />
    <ResponsiveLayout theme="light">
      <Content style={{ margin: 0, padding: 0, minHeight: "60em" }}>
        {children}
      </Content>
    </ResponsiveLayout>
    <AppFooter />
  </>
);

export default MainLayout;
