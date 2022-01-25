import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { AppTable } from "components/atoms/AppTable";
import { ResponsiveCard } from "components/atoms/ResponsiveCard";
import { UsersPageHeader } from "components/organims/Users/UsersPageHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "utils/routes";

const getColumns = ({ goEdit = () => {} }) => {
  return [
    {
      title: "Full name",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Analist",
      dataIndex: "analyst_name",
      key: "analyst_name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Button onClick={() => goEdit(id)} icon={<EyeOutlined />} />
      ),
    },
  ];
};

const DUMMY = [
  {
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
  },
  {
    id: 2,
    email: "email@test.com",
    phone: "9991436349",
    full_name: "Nelson Jhoan Concha Canto",
    birthdate: "07/03/1991",
    status: "COMPLETADO",
    analyst_name: "Pedro",
    card: {
      card_number: "",
      brand: "",
      cvv: "",
      pin: "",
      experate_date: "",
    },
  },
  {
    id: 3,
    email: "email@test.com",
    phone: "9991436349",
    full_name: "Nelson Jhoan Concha Canto",
    birthdate: "07/03/1991",
    status: "PROCESO",
    analyst_name: "Pedro",
    card: {
      card_number: "",
      brand: "",
      cvv: "",
      pin: "",
      experate_date: "",
    },
  },
];

export const UsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setUsers(DUMMY);
  };

  const goEdit = (id) => {
    navigate(routes.userEdit(id));
  };

  const onAdd = () => {
    navigate(routes.userAdd);
  };

  const columns = getColumns({ goEdit });

  return (
    <ResponsiveCard>
      <UsersPageHeader onAdd={onAdd} />
      <AppTable columns={columns} data={users} />
    </ResponsiveCard>
  );
};
