import React from "react";
import CustomImage from "@/components/custom-image/custom.image";
import ButtonOutLine from "@/components/ui/botton/botton-outline";
import type { ICustomWork } from "@/components/custom-work/interfaces/custom.work.interfaces";
import styles from "@/components/custom-work/css/custom.work.module.css";

const CustomWork: React.FC<ICustomWork> = ({ title, descripcion }) => {
    return (
        <section className={styles.work}>
            <article className={styles.article}>
                <div className={styles.containerText}>
                    <h2 className={styles.h2}>{title}</h2>
                    <p className={styles.p}>{descripcion}</p>
                </div>
                <div className={styles.containerBtn}>
                    <ButtonOutLine
                        text="Know More"
                    //onclick={() => {}}
                    />
                </div>
            </article>
            <div className={styles.containerImage}>
                <CustomImage
                    src="/sections/aboutwork/what-can-you-build.png"
                    alt="img-work"
                    width={634}
                    height={546}
                />
            </div>
        </section>
    );
};

export default CustomWork;
