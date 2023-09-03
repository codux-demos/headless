import { createBoard } from '@wixc3/react-board';
import { SuperText } from '../../../components/super-text/super-text';

export default createBoard({
    name: 'SuperText',
    Board: () => <SuperText />,
    isSnippet: true,
});
