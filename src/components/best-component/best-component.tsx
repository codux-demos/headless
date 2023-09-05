import "./best-component.module.scss";

export interface BestProps {
    className?: string;
    spanClassName?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see:
 * https://help.codux.com/kb/en/article/configuration-for-new-components-and-templates
 */
export const BestComponent = ({ className, children = "NewComponent" }: BestProps) => {
    return (
        <div className={className}>
            <span>{children}</span>
        </div>
    );
};
