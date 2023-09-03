import classNames from "classnames";
import styles from "./super-text.module.scss";

export interface SuperTextProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see:
 * https://help.codux.com/kb/en/article/configuration-for-super-texts-and-templates
 */
export const SuperText = ({ className, children = "SuperText" }: SuperTextProps) => {
    return <div className={classNames(styles.root, className)}><span>{children}</span></div>;
};
