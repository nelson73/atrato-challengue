import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { AppTable } from "components/atoms/AppTable";
import { UsersPageContext } from "context/UsersPageContext";
import { useContext } from "react";

const getColumns = ({ onEdit = () => {} }) => {
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
        <Button onClick={() => onEdit(id)} icon={<EyeOutlined />} />
      ),
    },
  ];
};

export const UsersTable = () => {
  const { users, onEdit, loading } = useContext(UsersPageContext);
  const columns = getColumns({ onEdit });

  return <AppTable columns={columns} data={users} loading={loading} />;
};
