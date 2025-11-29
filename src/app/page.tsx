import Navbar from "@/components/navbar/navbar";
import CustomCommunity from "@/components/custom-community/custom.community";
import CustomWork from "@/components/custom-work/custom.work";
import styles from "@/app/css/page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles.community}>
          <CustomCommunity
            title={`A Brand New Way${'\n'}To See The World`}
          />
        </section>
        <section>
          <CustomWork
            title={`The Process${'\n'}About Our Work`}
            descripcion={`Alejandro Laplana leads and adaptable end-to-end development team${'\n'}consisting of a large portion of captable enterprise mixed reality solutions.`}
          />
        </section>
      </main>
    </>
  );
};