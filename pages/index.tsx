import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { isAuthenticated, isAuthenticating, logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Web3.0 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button>
    </div>
  );
};

export default Home;
