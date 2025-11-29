'use client';

import React, { useState, useEffect } from "react";
import { INavbar } from "@/components/navbar/interfaces/navbar.interfaces";
import CustomLiNavBar from "@/components/custom-li/custom.li";
import ButtonLine from "@/components/ui/botton/botton-line";
import Search from "@/components/ui/search/search";
import CustomImage from "@/components/custom-image/custom.image";

import styles from "@/components/navbar/css/navbar.module.css";

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState<INavbar[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        fetch('/config/config.navbar.json')
            .then(res => res.json())
            .then(data => setMenu(data))
            .catch(err => {
                setMenu([]);
                console.log(err);
            });
    }, []);

    const handlerMenu = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
        const id = parseInt((event.target as HTMLAnchorElement).id);

        setMenu(prevData => {
            return prevData.map((item, index) => ({
                ...item,
                isActive: index === id,
            }));
        });
    };

    const handlerSearch = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = event.target;
        setSearch(value);
    };

    return (
        <nav className={styles.navbar}>
            <div>
                <CustomImage
                    src="/navbar/Group 2487.svg"
                    alt="logo"
                    width={331}
                    height={28}

                />
            </div>
            <ul className={styles.navbarUl}>
                {menu.map((item, index) => (
                    <CustomLiNavBar
                        id={`${index}`}
                        key={`${item.menu}-${index}`}
                        menu={item.menu}
                        isActive={item.isActive ?? false}
                        onclick={e => handlerMenu(e)}
                    />
                ))}
            </ul>
            <div className={styles.navbarSearch}>
                <Search
                    value={search}
                    onChange={e => handlerSearch(e)}
                />
            </div>
            <div>
                <ButtonLine
                    text="Contact Us"
                    onClick={() => {}}
                />
            </div>

        </nav>
    );
};

export default Navbar;
