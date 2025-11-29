import React from "react";
import ButtonLine from "@/components/ui/botton/botton-line";
import ButtonOutline from "@/components/ui/botton/botton-outline";
import CustomImage from "../custom-image/custom.image";
import Styles from "@/components/custom-community/css/custom.community.module.css";

import type { ICustomCommunity } from "@/components/custom-community/interfaces/custom.community.interfaces";

const CustomCommunity: React.FC<ICustomCommunity> = ({ text1, text2 }) => {
    return (
        <>
            <article className={Styles.community}>
                <div>
                    <CustomImage
                        src="/sections/community/community1.png"
                        alt="Group"
                        width={550}
                        height={450}
                    />
                </div>
                <label className={Styles.title}>{text1}</label>
                <label className={Styles.title}>{text2}</label>
            </article>
            <div className={Styles.btns}>
                <div>
                    <ButtonLine
                        text="Our Works"
                    //onClick={() => {}}
                    />
                </div>
                <div>
                    <ButtonOutline
                        text="Know More"
                    //onClick={() => {}}
                    />
                </div>
            </div>
        </>
    );
};

export default CustomCommunity;