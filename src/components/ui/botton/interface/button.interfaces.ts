import type { MouseEventHandler } from "react";

type TTypeBtn = "button" | "submit" | "reset";
type TOnClick = MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;

export interface IBotton {
    type?: TTypeBtn;
    text?: string;
    disabled?: boolean;
    ariaDisabled?: string;
    onClick?: TOnClick;
}