import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { UserAddOutlined } from "@ant-design/icons";
import AppButton from "components/atoms/AppButton";
import { useContext } from "react";
import { UsersPageContext } from "context/UsersPageContext";

export const UsersPageHeader = () => {
  const { onAdd } = useContext(UsersPageContext);

  return (
    <Row gutter={12} justify="space-between" style={{ padding: "1em 0" }}>
      <Col>
        <Title level={3}>Usuarios</Title>
      </Col>
      <Col>
        <AppButton onClick={() => onAdd()}>
          <UserAddOutlined /> Agregar
        </AppButton>
      </Col>
    </Row>
  );
};
