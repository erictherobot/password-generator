import Head from "next/head";
import PasswordGenerator from "@/components/PasswordGenerator";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Password Generator Online</title>
        <meta
          name="description"
          content="Generate strong and unique passwords with just a click using my free online password generator tool. Customize your password with options such as length, string letters, capital letters, digits, and special characters."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="-mt-10 container mx-auto min-h-screen flex items-center justify-center">
        <PasswordGenerator />
      </div>
    </>
  );
};

export default Home;
