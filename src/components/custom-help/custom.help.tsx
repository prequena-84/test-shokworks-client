import React from "react";
import CustomImage from "../custom-image/custom.image";
import styles from "@/components/custom-help/css/custom.help.module.css";
import { ICustomHelp } from "@/components/custom-help/interfaces/custom.help.interfaces";

const CustomHelp: React.FC<ICustomHelp> = ({ title, descripcion }) => {

    return (
        <section className={styles.help}>
            <div className={styles.containerImage}>
                <CustomImage 
                    src="/sections/help/help1.png"
                    alt="img-help"
                    width={678}
                    height={602}
                />
            </div>
            <article className={styles.article}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p}>{descripcion}</p>
            </article>
        </section>
    );
};

export default CustomHelp;