import { createBoard } from "@wixc3/react-board";
import { Table } from "../../../components/table/table";

export default createBoard({
    name: "React Table",
    Board: () => <Table />,
});
