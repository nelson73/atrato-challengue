import { Table } from "antd";

export const AppTable = ({ columns, data, loading = false }) => {
  const dataSource = data.map(({ id, ...object }) => ({
    key: id,
    id,
    ...object,
  }));
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      scroll={{ y: "60em", x: "40em" }}
    />
  );
};
