import { createBoard } from '@wixc3/react-board';
import { Size } from '../../../components/radix-menu/radix-menu';

export default createBoard({
    name: 'Popover - Radix',
    Board: () => (
        <div className="wrapper">
            <Size />
        </div>
    ),
    environmentProps: {
        windowWidth: 960,
        windowHeight: 640,
    },
});
