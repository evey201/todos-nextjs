import Head from "next/head"
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo's List | Home</title>
        <meta name="keywords" content="todos" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <p className={styles.text}>
          Mattis aliquam faucibus purus in massa tempor nec feugiat. Elementum
          curabitur vitae nunc sed velit dignissim sodales ut eu. Posuere ac ut
          consequat semper viverra nam. Montes nascetur ridiculus mus mauris. Ut
          sem viverra aliquet eget sit amet. Donec massa sapien faucibus et
          molestie ac feugiat sed. Tincidunt nunc pulvinar sapien et ligula
          ullamcorper malesuada proin libero. Quam adipiscing vitae proin sagittis
          nisl rhoncus mattis rhoncus urna. Accumsan sit amet nulla facilisi morbi
          tempus iaculis. Sagittis aliquam malesuada bibendum arcu vitae
          elementum.
        </p>
        <p className={styles.text}>
          Viverra tellus in hac habitasse platea. Pellentesque id nibh tortor id.
          Tellus at urna condimentum mattis pellentesque id nibh. Enim neque
          volutpat ac tincidunt vitae. Dictum fusce ut placerat orci nulla
          pellentesque. Cras pulvinar mattis nunc sed blandit libero volutpat sed.
          Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
          ullamcorper. Suscipit tellus mauris a diam maecenas sed enim ut.
          Pharetra pharetra massa massa ultricies mi. Egestas dui id ornare arcu
          odio ut sem.
        </p>
        <Link href="/todos">
          <a className={styles.btn}>See all todos</a>
        </Link>
      </div>
    </>
  );
}
