import { useTooltipTriggerState, type TooltipTriggerState } from "react-stately";
import { AriaTooltipProps, mergeProps, useTooltip, useTooltipTrigger } from "react-aria";
import { ReactElement, useRef } from "react";

export function Tooltip({
    state,
    ...props
}: { state: TooltipTriggerState; children: ReactElement[] } & AriaTooltipProps) {
    let { tooltipProps } = useTooltip(props, state);

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

export function TooltipButton(props: any) {
    let state = useTooltipTriggerState(props);
    let ref = useRef(null);

    // Get props for the trigger and its tooltip
    let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

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
