import React from "react";
import Image from "next/image";
import { IImage } from "./interfaces/custom.image.interfaces";
import style from "./css/custom.image.module.css";

const CustomImage: React.FC<IImage> = ({
    src,
    alt,
    width,
    height,
    className,
    containerClassName,
    ...props
}) => {
    return (
        <div className={`${style.imageContainer} ${containerClassName || ''}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`${style.image} ${className || ''}`}
                {...props}
            />
        </div>
    );
};

export default CustomImage;
