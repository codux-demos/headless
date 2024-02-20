import { createBoard } from "@wixc3/react-board";
import { Table } from "../../../components/table/table";
import "./style.css";

export default createBoard({
    name: "5-React Table",
    Board: () => <Table />,
    environmentProps: {
        windowWidth: 628,
        windowHeight: 540,
    },
});
