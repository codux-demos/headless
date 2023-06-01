import { createBoard } from "@wixc3/react-board";
import { Dimensions } from "../../../components/radix-popover/dimensions-popover";

export default createBoard({
    name: "Popover - Radix",
    Board: () => <Dimensions />,
    environmentProps: {
        windowWidth: 648,
        windowHeight: 340,
        canvasWidth: 330,
        canvasHeight: 300,
    },
});
