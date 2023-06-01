import { useRef } from "react";
import { SearchFieldProps, useSearchFieldState } from "react-stately";
import { useButton, AriaButtonProps, useSearchField } from "react-aria";
import "./search.css";

function Button(props: AriaButtonProps<"button">) {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    return (
        <button {...buttonProps} ref={ref}>
            {props.children}
        </button>
    );
}

export function SearchField(props: SearchFieldProps) {
    const { label } = props;
    const state = useSearchFieldState(props);
    const ref = useRef(null);
    const { labelProps, inputProps, clearButtonProps } = useSearchField(props, state, ref);

    return (
        <div className="search-field">
            <label {...labelProps}>{label}</label>
            <div>
                <input {...inputProps} ref={ref} />
                {state.value !== "" && <Button {...clearButtonProps}>❎</Button>}
            </div>
        </div>
    );
}
