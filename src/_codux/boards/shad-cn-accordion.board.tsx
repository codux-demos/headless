import { createBoard } from "@wixc3/react-board";
import { NavigationMenuDemo } from "../../components/shadcd/menu-example";

export default createBoard({
    name: "ShadCn-Accordion",
    Board: () => <NavigationMenuDemo />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 720,
    },
});
