import { createBoard } from "@wixc3/react-board";
import { Dimensions } from "../../../components/radix-popover/dimensions-popover";

export default createBoard({
    name: "3-Popover - Radix",
    Board: () => <Dimensions />,
    environmentProps: {
        windowWidth: 1280,
        windowHeight: 720,
    },
});
