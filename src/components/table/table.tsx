import React from "react";
import { faker } from "@faker-js/faker";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    type ColumnOrderState,
} from "@tanstack/react-table";
import { makeData } from "./makeData";
import styles from "./table.module.scss";
import { defaultColumns } from "./columns";

export function Table() {
    const size = 7;
    const [data, setData] = React.useState(() => makeData(size));
    const [columns] = React.useState(() => [...defaultColumns]);

    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([]);

    const rerender = () => setData(() => makeData(size));

    const table = useReactTable({
        data,
        columns,
        state: {
            columnVisibility,
            columnOrder,
        },
        onColumnVisibilityChange: setColumnVisibility,
        onColumnOrderChange: setColumnOrder,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    });

    const randomizeColumns = () => {
        table.setColumnOrder(faker.helpers.shuffle(table.getAllLeafColumns().map((d) => d.id)));
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.toggles}>
                <label className={styles.toggle}>
                    <input
                        type="checkbox"
                        checked={table.getIsAllColumnsVisible()}
                        onChange={table.getToggleAllColumnsVisibilityHandler()}
                    />
                    Toggle All
                </label>
                {table.getAllLeafColumns().map((column) => (
                    <label key={column.id} className={styles.toggle}>
                        <input
                            type="checkbox"
                            checked={column.getIsVisible()}
                            onChange={column.getToggleVisibilityHandler()}
                        />{" "}
                        {column.id}
                    </label>
                ))}
            </div>

            <table className={styles.table}>
                <thead className={styles.headers}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    className={styles.header}
                                    key={header.id}
                                    colSpan={header.colSpan}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr className={styles.row} key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.actions}>
                <button className={styles.action} onClick={() => rerender()}>
                    Regenerate
                </button>
                <button className={styles.action} onClick={() => randomizeColumns()}>
                    Shuffle Columns
                </button>
            </div>
        </div>
    );
}
