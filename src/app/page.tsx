import Navbar from "@/components/navbar/navbar";
import CustomCommunity from "@/components/custom-community/custom.community";

import styles from "@/app/css/page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <section className={styles.community}>
          <CustomCommunity 
            text1="A Brand New Way"
            text2="To See The World"
          />
        </section>
      </main>
    </>
  );
};