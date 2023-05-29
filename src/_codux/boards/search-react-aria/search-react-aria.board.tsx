import { createBoard } from '@wixc3/react-board';
import { SearchField } from '../../../components/search-react-aria/search-react-aria';

export default createBoard({
    name: 'SliderReactAria',
    Board: () => <SearchField label="Search" onSubmit={(text: string) => alert(text)} />,
    environmentProps: {
        canvasWidth: 254,
    },
});
