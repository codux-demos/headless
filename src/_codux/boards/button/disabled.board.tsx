import { createBoard } from '@wixc3/react-board';
import styles from '../playground.board.module.scss';
import icon from '../../../assets/edit.svg';
import { Button, Space, Tooltip, Divider } from 'antd';

export default createBoard({
    name: 'Button - Disabled',
    Board: () => {
        return (
            <div className={styles.section}>
                <Space direction="vertical">
                    <Space>
                        <Button type="primary">Primary</Button>
                        <Button type="primary" disabled>
                            Primary(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button>Default</Button>
                        <Button disabled>Default(disabled)</Button>
                    </Space>
                    <Space>
                        <Button type="dashed">Dashed</Button>
                        <Button type="dashed" disabled>
                            Dashed(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button type="text">Text</Button>
                        <Button type="text" disabled>
                            Text(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button type="link">Link</Button>
                        <Button type="link" disabled>
                            Link(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button type="primary" href="https://ant.design/index-cn">
                            Href Primary
                        </Button>
                        <Button type="primary" href="https://ant.design/index-cn" disabled>
                            Href Primary(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button danger>Danger Default</Button>
                        <Button danger disabled>
                            Danger Default(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button danger type="text">
                            Danger Text
                        </Button>
                        <Button danger type="text" disabled>
                            Danger Text(disabled)
                        </Button>
                    </Space>
                    <Space>
                        <Button type="link" danger>
                            Danger Link
                        </Button>
                        <Button type="link" danger disabled>
                            Danger Link(disabled)
                        </Button>
                    </Space>
                    <Space className="site-button-ghost-wrapper">
                        <Button ghost>Ghost</Button>
                        <Button ghost disabled>
                            Ghost(disabled)
                        </Button>
                    </Space>
                </Space>
                <div>
                    <Divider orientation="left" orientationMargin="0">
                        <Tooltip title="Edit this demo on GitHub!">
                            <a
                                className={styles.title}
                                href="https://github.com/ant-design/ant-design/edit/master/components/button/demo/disabled.tsx"
                            >
                                Disabled <img src={icon} />
                            </a>
                        </Tooltip>
                    </Divider>
                    <p>
                        To mark a button as disabled, add the <code>disabled</code> property to the{' '}
                        <code>Button</code>.
                    </p>
                </div>
            </div>
        );
    },
});
