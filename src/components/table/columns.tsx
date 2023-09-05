import { type ColumnDef } from "@tanstack/react-table";
import { type Person } from "./makeData";
import styles from "./table.module.scss";

export const defaultColumns: ColumnDef<Person>[] = [
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
