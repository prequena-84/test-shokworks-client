import React from "react";
import { IBotton } from "@/components/ui/botton/interface/button.interfaces";

import style from "@/components/ui/botton/css/button.module.css"

const ButtonOutLine: React.FC<IBotton> = ({
    type="button",
    text,
    disabled=false,
    onClick
}) => {
    return (
        <button
            type={type}
            className={style.btnOutLine}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ButtonOutLine;