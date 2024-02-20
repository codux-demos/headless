import { createBoard } from "@wixc3/react-board";
import { SearchField } from "../../../components/search-react-aria/search-react-aria";

export default createBoard({
    name: "4-Search - React Aria",
    Board: () => <SearchField label="Search" onSubmit={(text: string) => alert(text)} />,
    environmentProps: {
        canvasWidth: 254,
        windowWidth: 412,
        windowHeight: 300,
        canvasHeight: 48,
    },
});
