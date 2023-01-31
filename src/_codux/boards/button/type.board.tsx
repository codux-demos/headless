import { createBoard } from '@wixc3/react-board';
import styles from '../playground.board.module.scss';
import icon from '../../../assets/edit.svg';
import { Button, Space, Tooltip, Divider } from 'antd';

export default createBoard({
    name: 'Button - Type',
    Board: () => {
        return (
            <div className={styles.section}>
                <Space wrap>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </Space>
                <div>
                    <Divider orientation="left" orientationMargin="0">
                        <Tooltip title="Edit this demo on GitHub!">
                            <a
                                className={styles.title}
                                href="https://github.com/ant-design/ant-design/edit/master/components/button/demo/basic.tsx"
                            >
                                Type <img src={icon} />
                            </a>
                        </Tooltip>
                    </Divider>
                    <p>
                        There are <code>primary</code> button, <code>default</code> button,{' '}
                        <code>dashed</code> button, <code>text</code> button and <code>link</code>{' '}
                        button in antd.
                    </p>
                </div>
            </div>
        );
    },
});
