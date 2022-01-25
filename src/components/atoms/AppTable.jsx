import { Table } from "antd";
import React from "react";

export const AppTable = ({ columns, data }) => {
  const dataSource = data.map(({ id, ...object }) => ({
    key: id,
    id,
    ...object,
  }));
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ y: "60em", x: "40em" }}
    />
  );
};
