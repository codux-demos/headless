import { createBoard } from "@wixc3/react-board";
import { Menu } from "../../../components/menu/menu";

export default createBoard({
    name: "Ant Design Menu",
    Board: () => <Menu />,
    environmentProps: {
        canvasHeight: 107,
    },
});
