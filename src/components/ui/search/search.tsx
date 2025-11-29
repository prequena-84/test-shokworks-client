import react from "react";
import Input from "@/components/ui/input/input";
import { ISearch } from "@/components/ui/search/interfaces/search.interfaces";
import style from "@/components/ui/search/css/search.module.css";
import CustomImage from "@/components/custom-image/custom.image";


const Search: react.FC<ISearch> = ({
    value, 
    onChange
}) => {

    return (
        <div className={style.search}>
            <div className={style.containerInput}>
                <Input
                    placeHolder="Search Here"
                    name="search"
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div className={style.containerImage}>
                <CustomImage
                    src="/navbar/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                />   
            </div>
        </div> 
    );
};    

export default Search;