import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Column, useTable } from "react-table";
import { storeItem } from "../Homepage/types";
import { cartSlice } from "./selectors";

const Cart: React.FC = () => {
  const cart = useSelector(cartSlice);

  const columns = useMemo<Column<storeItem>[]>(
    () => [
      {
        Header: "",
        id: "image",
        accessor: (d: storeItem) => (
          <div className="image-container">
            <img src={d.image} />
          </div>
        ),
      },
      {
        Header: "",
        id: "title",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Total",
        accessor: (d: storeItem) => d.price * (d.quantity as number),
        Footer: (info) => {
          const total = useMemo(
            () => info.rows.reduce((sum, row) => row.values.Total + sum, 0),
            [info.rows]
          );
          return <>{total}</>;
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data: cart });

  return (
    <div className="container">
      <div className="cart-title">My cart</div>
      <table {...getTableProps()} className="section-padding table">
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr
                key={key}
                {...restHeaderGroupProps}
                className="table__header-row"
              >
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps();
                  return (
                    <th key={key} {...restColumn}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <td key={key} {...restCellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((group) => {
            const { key, ...restGetFooterGroupProps } =
              group.getFooterGroupProps();
            return (
              <tr key={key} {...restGetFooterGroupProps}>
                {group.headers.map((column) => {
                  const { key, ...restGetFooterProps } =
                    column.getFooterProps();
                  return (
                    <td key={key} {...restGetFooterProps}>
                      {column.render("Footer")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
