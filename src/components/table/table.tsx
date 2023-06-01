import React from "react";
import { faker } from "@faker-js/faker";

import {
    ColumnDef,
    ColumnOrderState,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { makeData, Person } from "./makeData";
import styles from "./table.module.scss";

const defaultColumns: ColumnDef<Person>[] = [
    {
        id: "name",
        header: () => <span className={styles.header}>Name</span>,
        footer: (props) => props.column.id,
        columns: [
            {
                accessorKey: "firstName",
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id,
            },
            {
                accessorFn: (row) => row.lastName,
                id: "lastName",
                cell: (info) => info.getValue(),
                header: () => <span className={styles.header}>Last Name</span>,
                footer: (props) => props.column.id,
            },
        ],
    },
    {
        header: "Info",
        footer: (props) => props.column.id,
        columns: [
            {
                accessorKey: "age",
                header: () => <span className={styles.header}>Age</span>,
                footer: (props) => props.column.id,
            },
            {
                header: "More Info",
                columns: [
                    {
                        accessorKey: "visits",
                        header: () => <span className={styles.header}>Visits</span>,
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorKey: "status",
                        header: () => <span className={styles.header}>Status</span>,
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorKey: "progress",
                        header: "Profile Progress",
                        footer: (props) => props.column.id,
                    },
                ],
            },
        ],
    },
];

export function Table() {
    const [data, setData] = React.useState(() => makeData(20));
    const [columns] = React.useState(() => [...defaultColumns]);

    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([]);

    const rerender = () => setData(() => makeData(20));

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
                        {...{
                            type: "checkbox",
                            checked: table.getIsAllColumnsVisible(),
                            onChange: table.getToggleAllColumnsVisibilityHandler(),
                        }}
                    />
                    Toggle All
                </label>
                {table.getAllLeafColumns().map((column) => (
                    <label key={column.id} className={styles.toggle}>
                        <input
                            {...{
                                type: "checkbox",
                                checked: column.getIsVisible(),
                                onChange: column.getToggleVisibilityHandler(),
                            }}
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
                <tfoot className={styles.actions}>
                    <tr>
                        <td>
                            <button className={styles.action} onClick={() => rerender()}>
                                Regenerate
                            </button>
                        </td>
                        <td>
                            <button className={styles.action} onClick={() => randomizeColumns()}>
                                Shuffle Columns
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
