import { useSearchFieldState } from 'react-stately';
import { AriaButtonProps, useSearchField } from 'react-aria';
import { useRef } from 'react';
import './search.css';

import { useButton } from 'react-aria';

function Button(props: AriaButtonProps<'button'>) {
    let ref = useRef(null);
    let { buttonProps } = useButton(props, ref);
    return (
        <button {...buttonProps} ref={ref}>
            {props.children}
        </button>
    );
}

export function SearchField(props: any) {
    let { label } = props;
    let state = useSearchFieldState(props);
    let ref = useRef(null);
    let { labelProps, inputProps, clearButtonProps } = useSearchField(props, state, ref);

    return (
        <div className="search-field">
            <label {...labelProps}>{label}</label>
            <div>
                <input {...inputProps} ref={ref} />
                {state.value !== '' && <Button {...clearButtonProps}>❎</Button>}
            </div>
        </div>
    );
}
