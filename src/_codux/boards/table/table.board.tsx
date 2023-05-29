import { createBoard } from '@wixc3/react-board';
import { Table } from '../../../components/table/table';

export default createBoard({
    name: 'Table',
    Board: () => <Table />
});
