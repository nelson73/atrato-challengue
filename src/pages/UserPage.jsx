import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { ResponsiveCard } from "components/atoms/ResponsiveCard";
import { UserForm } from "components/organims/User/UserForm";
import { UserHeader } from "components/organims/User/UserHeader";
import { UserPageProvider } from "context/UserPageContext";

export const UserPage = ({ isAdd = false }) => (
  <UserPageProvider isAdd={isAdd}>
    <ResponsiveCard>
      <Row style={{ padding: "2em" }} justify="center">
        <Col xs={0} md={3} lg={2} style={{ paddingRight: "2em" }}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col xs={24} md={18} lg={19}>
          <Row gutter={[6, 16]} align="top" justify="space-between">
            <UserHeader />
            <Col xs={24}>
              <UserForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </ResponsiveCard>
  </UserPageProvider>
);
