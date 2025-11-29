import React from "react";
import { IElipse } from "@/components/ui/elipse/interfaces/elipse.interfaces";
import styles from "@/components/ui/elipse/css/elipse.module.css"

const Elipse: React.FC<IElipse> = ({
    ariaHidden=false,
    ariaLabel=undefined
}) => {
    return (
        <span
            className={styles.elipse}
            aria-hidden={ariaHidden}
            aria-label={ariaLabel}
        />
    );
};

export default Elipse;