import Stairs from "@/components/stairs";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="hero min-h-96">
          <div className="hero-content text-center">
            <div className="flex justify-center items-center">
              <h1 className="text-7xl">ABOUT</h1>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}
