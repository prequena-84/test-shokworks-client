import Navbar from "@/components/navbar/navbar";
import CustomCommunity from "@/components/custom-community/custom.community";
import CustomWork from "@/components/custom-work/custom.work";
import CustomHelp from "@/components/custom-help/custom.help";
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
        <section>
          <CustomHelp
            title={<>We are here to {'\n'}<b>always help</b> you</>}
            descripcion={`Shokworks team provide solutions and guidance to every${'\n'}project, taking the project vision to high level.`}
          />  
        </section>
      </main>
    </>
  );
};