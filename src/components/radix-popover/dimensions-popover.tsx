import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import "./popover.scss";
import "@radix-ui/colors/black-alpha.css";
import "@radix-ui/colors/mauve.css";
import "@radix-ui/colors/violet.css";

export const Dimensions = () => (
    <Popover.Root>
        <Popover.Trigger asChild>
            <button aria-label="Update dimensions" className="iconButton">
                <MixerHorizontalIcon />
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className="popoverContent" sideOffset={5}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p className="text" style={{ marginBottom: 10 }}>
                        Dimensions
                    </p>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="width">
                            Width
                        </label>
                        <input className="input" id="width" defaultValue="100%" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="maxWidth">
                            Max. width
                        </label>
                        <input className="input" id="maxWidth" defaultValue="300px" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="height">
                            Height
                        </label>
                        <input className="input" id="height" defaultValue="25px" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="maxHeight">
                            Max. height
                        </label>
                        <input className="input" id="maxHeight" defaultValue="none" />
                    </fieldset>
                </div>
                <Popover.Close className="popoverClose" aria-label="Close">
                    <Cross2Icon />
                </Popover.Close>
                <Popover.Arrow className="popoverArrow" />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);
