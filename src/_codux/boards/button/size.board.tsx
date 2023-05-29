import { createBoard } from '@wixc3/react-board';
import styles from '../playground.board.module.scss';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space, Tooltip, Avatar } from 'antd';
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
                     <Avatar />
                </Space>
                <div>
                    <Divider orientation="left" orientationMargin="0">
                        <Tooltip title="Edit this demo on GitHub!">
                            <a
                                className={styles.title}
                                href="https://github.com/ant-design/ant-design/edit/master/components/button/demo/size.tsx"
                            >
                                Size
                            </a>
                        </Tooltip>
                    </Divider>

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
