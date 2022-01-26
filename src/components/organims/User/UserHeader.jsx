import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row } from "antd";
import AppButton from "components/atoms/AppButton";
import AppTitle from "components/atoms/AppTitle";
import { UserPageContext } from "context/UserPageContext";
import { useContext } from "react";
import { When } from "react-if";
import { colors } from "utils/colors";

const { gray } = colors;

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
        <Row align="middle">
          <Col xs={24}>
            <AppTitle level={4}>{user ? full_name : "Nuevo usuario"}</AppTitle>
          </Col>
          <When condition={!!user}>
            <Col xs={24}>
              <AppTitle level={5} color={gray}>
                ID: {id}
              </AppTitle>
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
