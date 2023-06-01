import { ReactElement, useRef } from "react";
import {
    useTooltipTriggerState,
    type TooltipTriggerProps,
    type TooltipTriggerState,
} from "react-stately";
import { AriaTooltipProps, mergeProps, useTooltip, useTooltipTrigger } from "react-aria";

export function Tooltip({
    state,
    ...props
}: { state: TooltipTriggerState; children: ReactElement[] } & AriaTooltipProps) {
    const { tooltipProps } = useTooltip(props, state);

    return (
        <span
            style={{
                position: "absolute",
                left: "5px",
                top: "100%",
                maxWidth: 150,
                marginTop: "10px",
                backgroundColor: "white",
                color: "black",
                padding: "5px",
                border: "1px solid gray",
            }}
            {...mergeProps(props, tooltipProps)}
        >
            {props.children}
        </span>
    );
}

export interface TooltipButtonProps extends React.PropsWithChildren<TooltipTriggerProps> {
    tooltip: React.ReactElement[];
}

export function TooltipButton(props: TooltipButtonProps) {
    const state = useTooltipTriggerState(props);
    const ref = useRef<HTMLButtonElement>(null);

    const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

    return (
        <span style={{ position: "relative" }}>
            <button
                ref={ref}
                {...triggerProps}
                style={{ fontSize: 18 }}
                onClick={() => alert("Pressed button")}
            >
                {props.children}
            </button>
            {state.isOpen && (
                <Tooltip state={state} {...tooltipProps}>
                    {props.tooltip}
                </Tooltip>
            )}
        </span>
    );
}
