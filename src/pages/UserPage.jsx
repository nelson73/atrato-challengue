import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { ResponsiveCard } from "components/atoms/ResponsiveCard";
import { UserForm } from "components/organims/User/UserForm";
import { UserHeader } from "components/organims/User/UserHeader";
import { useEffect, useState } from "react";

const DUMMY = {
  id: 1,
  email: "email@test.com",
  phone: "9991436349",
  full_name: "Nelson Jhoan Concha Canto",
  birthdate: "07/03/1991",
  status: "PENDIENTE",
  analyst_name: "Pedro",
  card: {
    card_number: "",
    brand: "",
    cvv: "",
    pin: "",
    experate_date: "",
  },
};

export const UserPage = ({ isAdd = false }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!isAdd) {
      getUser();
    }
  }, [isAdd]);

  const getUser = () => {
    setUser(DUMMY);
  };

  return (
    <ResponsiveCard>
      <Row style={{ padding: "2em" }} justify="center">
        <Col xs={0} md={3} lg={2} style={{ paddingRight: "2em" }}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col xs={24} md={18} lg={19}>
          <Row gutter={[6, 16]} align="top" justify="space-between">
            <UserHeader user={user} />
            <Col xs={24}>
              <UserForm user={user} isAdd={isAdd} />
            </Col>
          </Row>
        </Col>
      </Row>
    </ResponsiveCard>
  );
};
