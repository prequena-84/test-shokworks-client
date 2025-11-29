//'use client'

import React from "react";
import { IInput } from "./interfaces/input.interfaces";

import style from "@/components/ui/input/css/input.module.css"


const Input: React.FC<IInput> = ({
    name,
    id="",
    type="text",
    placeHolder,
    arialLabel,
    value,
    disabled=false,
    onChange,
}) => {
    return (
        <input
            name={name}
            id={id}
            type={type}
            className={style.input}
            placeholder={placeHolder}
            aria-label={arialLabel}
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default Input;