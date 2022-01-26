import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Menu, Popconfirm } from "antd";
import { AppIcon } from "components/atoms/AppIcon";
import { AppTable } from "components/atoms/AppTable";
import MoreOptions from "components/molecules/MoreOptions";
import { UsersPageContext } from "context/UsersPageContext";
import { useContext } from "react";
import styled from "styled-components";
import { colors } from "utils/colors";

const { primaryMarineBlue } = colors;

const MenuItem = styled(Menu.Item)`
  span {
    color: ${primaryMarineBlue};
  }
`;

const getColumns = ({ onEdit = () => {}, onDelete = () => {} }) => {
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
        <MoreOptions>
          <Menu>
            <MenuItem>
              <Button
                type="link"
                onClick={() => onEdit(id)}
                icon={<AppIcon Icon={EyeOutlined} />}
              >
                Ver
              </Button>
            </MenuItem>
            <MenuItem>
              <Popconfirm
                title="¿Segura que deseas eliminar a este usuario?"
                onConfirm={() => onDelete(id)}
                okText="Sí"
                cancelText="No"
              >
                <Button
                  type="link"
                  icon={<AppIcon Icon={DeleteOutlined} color="red" />}
                >
                  Eliminar
                </Button>
              </Popconfirm>
            </MenuItem>
          </Menu>
        </MoreOptions>
      ),
    },
  ];
};

export const UsersTable = () => {
  const { users, onEdit, loading } = useContext(UsersPageContext);
  const columns = getColumns({ onEdit });

  return <AppTable columns={columns} data={users} loading={loading} />;
};
