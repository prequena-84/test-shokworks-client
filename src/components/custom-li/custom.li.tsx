'use client'

import React from "react";    
import Link from "next/link";
import Elipse from "@/components/ui/elipse/elipse";
import { ICustomLi } from "@/components/custom-li/interfaces/custom.li-interfaces";

import styles from "@/components/custom-li/css/custom.li.module.css"

const CustomLiNavBar:React.FC<ICustomLi> = ({
   id,
   menu,
   isActive=false,
   link="/",
   onclick
}) => {
    return (
        <>
            <li className={styles.li}>
                <Link id={id} onClick={onclick} href={link} className={`${styles.link} ${ isActive ? styles.isActive : styles.notActive }`}>
                    {menu}
                </Link>
                {isActive && <Elipse />}
            </li>
        </>
    );
};

export default CustomLiNavBar;