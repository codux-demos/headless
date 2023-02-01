import { Image, Divider, Row, Col } from 'antd';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <Image.PreviewGroup>
                <Image
                    width={200}
                    preview={false}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
                <Image
                    width={200}
                    preview={false}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
            </Image.PreviewGroup>
            <div className={styles.title}>
                <Divider orientation="left">Components Overview</Divider>
                <p>
                    <code>antd</code> provides plenty of UI components to enrich your web
                    applications, and we will improve components experience consistently.
                </p>
            </div>
        </div>
    );
}

export default App;
