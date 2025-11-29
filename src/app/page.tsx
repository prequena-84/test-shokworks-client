//import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";

//import CustomLiNavBar from "../components/custom-li/custom.li";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Home</h1>

    {/*<ul>
      <CustomLiNavBar 
        menu="Home"
        isActive={true}
      />
    </ul>*/}
    </>
  );
};