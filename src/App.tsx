import { Image, Divider } from "antd";
import styles from "./App.module.scss";
import { Menu } from "./components/menu/menu";

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
            <Menu />
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
