import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row, Typography } from "antd";
import AppButton from "components/atoms/AppButton";
import { UserPageContext } from "context/UserPageContext";
import { useContext } from "react";
import { When } from "react-if";
import { colors } from "utils/colors";

const { primaryDarkBlue, gray } = colors;

const { Title } = Typography;

export const UserHeader = () => {
  const { user, loading } = useContext(UserPageContext);

  const { id, full_name } = user ?? {};

  const menu = () => (
    <Menu onClick={(key) => console.log(key)}>
      <Menu.Item key="PENDIENTE">PENDIENTE</Menu.Item>
      <Menu.Item key="COMPLETADO">COMPLETADO</Menu.Item>
      <Menu.Item key="PROCESO">PROCESO</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Col xs={18} lg={16}>
        <Row align="middle" style={{ textAlign: "initial" }}>
          <Col xs={24}>
            <Title level={4} style={{ color: primaryDarkBlue }}>
              {user ? full_name : "Nuevo usuario"}
            </Title>
          </Col>
          <When condition={!!user}>
            <Col xs={24}>
              <Title level={5} style={{ color: gray }}>
                ID: {id}
              </Title>
            </Col>
          </When>
        </Row>
      </Col>
      <When condition={!!user}>
        <Col>
          <Dropdown overlay={menu}>
            <AppButton loading={loading}>
              Status <DownOutlined />
            </AppButton>
          </Dropdown>
        </Col>
      </When>
    </>
  );
};
