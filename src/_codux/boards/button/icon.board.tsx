import { createBoard } from '@wixc3/react-board';
import icon from '../../../assets/edit.svg';
import styles from '../playground.board.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space, Divider } from 'antd';

export default createBoard({
    name: 'Button - Icon',
    Board: () => {
        return (
            <div className={styles.section}>
                <Space direction="vertical">
                    <Space wrap>
                        <Tooltip title="search">
                            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button type="primary" shape="circle">
                            A
                        </Button>
                        <Button type="primary" icon={<SearchOutlined />}>
                            Search
                        </Button>
                        <Tooltip title="search">
                            <Button shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button icon={<SearchOutlined />}>Search</Button>
                    </Space>
                    <Space wrap>
                        <Tooltip title="search">
                            <Button shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button icon={<SearchOutlined />}>Search</Button>
                        <Tooltip title="search">
                            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button type="dashed" icon={<SearchOutlined />}>
                            Search
                        </Button>
                        <Button icon={<SearchOutlined />} href="https://www.google.com" />
                    </Space>
                </Space>
                <div>
                    <Tooltip title="Edit this demo on GitHub!">
                        <Divider orientation="left" orientationMargin="0">
                            <a
                                className={styles.title}
                                href="https://github.com/ant-design/ant-design/edit/master/components/button/demo/icon.tsx"
                            >
                                Icon <img src={icon} />
                            </a>
                        </Divider>
                    </Tooltip>
                    <p>
                        <code>Button</code> components can contain an <code>Icon</code>. This is
                        done by setting the <code>icon</code>
                        property or placing an <code>Icon</code> component within the{' '}
                        <code>Button</code>. If you want specific control over the positioning and
                        placement of the <code>Icon</code>, then that should be done by placing the{' '}
                        <code>Icon</code>
                        component within the Button rather than using the <code>icon</code>{' '}
                        property..
                    </p>
                </div>
            </div>
        );
    },
});
