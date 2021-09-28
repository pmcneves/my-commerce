import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import { storeItem } from "../Homepage/types";
import { cartSlice } from "./selectors";

const Cart: React.FC = () => {
  const cart = useSelector(cartSlice);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<any>(
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
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: cart });

  return (
    <div className="container">
      <div className="cart-title">My cart</div>
      <table {...getTableProps()} className="section-padding">
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr
                key={key}
                {...restHeaderGroupProps}
                className="table-header-row"
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
      </table>
    </div>
  );
};

export default Cart;
