import { createBoard } from '@wixc3/react-board';
import styles from '../playground.board.module.scss';
import icon from '../../../assets/edit.svg';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space, Tooltip } from 'antd';
import { useState } from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';

export default createBoard({
    name: 'Button - Size',
    Board: () => {
        const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

        return (
            <div className={styles.section}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <Divider orientation="left" plain>
                    Preview
                </Divider>
                <Space direction="vertical">
                    <Space wrap>
                        <Button type="primary" size={size}>
                            Primary
                        </Button>
                        <Button size={size}>Default</Button>
                        <Button type="dashed" size={size}>
                            Dashed
                        </Button>
                    </Space>
                    <Button type="link" size={size}>
                        Link
                    </Button>
                    <Space wrap>
                        <Button type="primary" icon={<DownloadOutlined />} size={size} />
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<DownloadOutlined />}
                            size={size}
                        />
                        <Button
                            type="primary"
                            shape="round"
                            icon={<DownloadOutlined />}
                            size={size}
                        />
                        <Button
                            type="primary"
                            shape="round"
                            icon={<DownloadOutlined />}
                            size={size}
                        >
                            Download
                        </Button>
                        <Button type="primary" icon={<DownloadOutlined />} size={size}>
                            Download
                        </Button>
                    </Space>
                </Space>
                <div>
                    <Tooltip title="Edit this demo on GitHub!">
                        <Divider orientation="left" orientationMargin="0">
                            <a
                                className={styles.title}
                                href="https://github.com/ant-design/ant-design/edit/master/components/button/demo/size.tsx"
                            >
                                Size <img src={icon} />
                            </a>
                        </Divider>
                    </Tooltip>

                    <p>
                        Ant Design supports a default button size as well as a large and small size.
                        If a large or small button is desired, set the <code>size</code> property to
                        either <code>large</code> or <code>small</code> respectively. Omit the{' '}
                        <code>size</code> property for a button with the default size..
                    </p>
                </div>
            </div>
        );
    },
});
