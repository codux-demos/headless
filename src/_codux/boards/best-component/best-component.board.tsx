import { createBoard } from "@wixc3/react-board";
import { BestComponent } from "../../../components/best-component/best-component";
import styles from "../../../components/best-component/best-component.module.scss";

export default createBoard({
    name: "Best Component Ever",
    Board: () => (
        <BestComponent className={styles.outer} innerClass={styles.inner}>
            Encapsulation
        </BestComponent>
    ),
    isSnippet: true,
});
