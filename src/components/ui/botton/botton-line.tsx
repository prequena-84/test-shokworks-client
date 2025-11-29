import React from "react";
import { IBotton } from "@/components/ui/botton/interface/button.interfaces";

import style from "@/components/ui/botton/css/button.module.css"

const ButtonLine: React.FC<IBotton> = ({
    type="button",
    text,
    disabled=false,
    onClick
}) => {
    return (
        <button
            type={type}
            className={style.btnLine}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ButtonLine;
