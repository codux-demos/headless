import { createBoard } from "@wixc3/react-board";
import { Table } from "../../../components/table/table";
import "./style.css";

export default createBoard({
    name: "React Table",
    Board: () => <Table />,
});
