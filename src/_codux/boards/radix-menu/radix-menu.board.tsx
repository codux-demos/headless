import { createBoard } from "@wixc3/react-board";
import { RadixMenu } from "../../../components/radix-menu/radix-menu";

export default createBoard({
    name: "Popover - Radix",
    Board: () => <RadixMenu />,
    environmentProps: {
        windowWidth: 960,
        windowHeight: 640,
    },
});
