import { createBoard } from '@wixc3/react-board';
import icon from '../../../assets/edit.svg';
import styles from '../playground.board.module.scss';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip, Divider } from 'antd';

export default createBoard({
    name: 'Button - Loading',
    Board: () => {
        const [loadings, setLoadings] = useState<boolean[]>([]);

        const enterLoading = (index: number) => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = true;
                return newLoadings;
            });

            setTimeout(() => {
                setLoadings((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                });
            }, 6000);
        };

        return (
            <div className={styles.section}>
                <Space direction="vertical">
                    <Space wrap>
                        <Button type="primary" loading>
                            Loading
                        </Button>
                        <Button type="primary" size="small" loading>
                            Loading
                        </Button>
                        <Button type="primary" icon={<PoweroffOutlined />} loading />
                    </Space>

                    <Space wrap>
                        <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => enterLoading(0)}
                        >
                            Click me!
                        </Button>
                        <Button
                            type="primary"
                            icon={<PoweroffOutlined />}
                            loading={loadings[1]}
                            onClick={() => enterLoading(1)}
                        >
                            Click me!
                        </Button>
                        <Button
                            type="primary"
                            icon={<PoweroffOutlined />}
                            loading={loadings[2]}
                            onClick={() => enterLoading(2)}
                        />
                    </Space>
                </Space>

                <div>
                    <Divider orientation="left" orientationMargin="0">
                        <Tooltip title="Edit this demo on GitHub!">
                            <a
                                className={styles.title}
                                href="https://github.com/ant-design/ant-design/edit/master/components/button/demo/loading.tsx"
                            >
                                Loading <img src={icon} />
                            </a>
                        </Tooltip>
                    </Divider>
                    <p>
                        A loading indicator can be added to a button by setting the loading {''}
                        <code>property</code> on the <code>Button</code>.
                    </p>
                </div>
            </div>
        );
    },
});
