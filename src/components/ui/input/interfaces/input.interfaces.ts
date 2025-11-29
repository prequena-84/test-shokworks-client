import type { InputHTMLAttributes } from "react";

type TType = "text" | "number" | "password" | "email" | "url" | "number" | "date" | "checkbox" | "radio" | "radio" | "file" | "submit";
type TOnChange = InputHTMLAttributes<HTMLInputElement>['onChange'];

export interface IInput {
    name: string;
    id?: string;
    type?: TType;
    placeHolder?: string;
    arialLabel?: string;
    value?: string | number;
    disabled?: boolean;
    onChange: TOnChange;
}