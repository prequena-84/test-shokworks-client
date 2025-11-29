import type { InputHTMLAttributes } from "react";

type TOnChange = InputHTMLAttributes<HTMLInputElement>['onChange'];

export interface ISearch {
 value: string;
 onChange: TOnChange;  
}