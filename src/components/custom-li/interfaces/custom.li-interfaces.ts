import type { MouseEventHandler } from "react";

type TOnClick = MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;

export interface ICustomLi {
    id: string;
    key?: string;
    menu: string;
    submenu?: string[];
    isActive: boolean;
    link?: string;
    onclick: TOnClick;
}