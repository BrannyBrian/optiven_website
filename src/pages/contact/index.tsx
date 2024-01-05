import Head from "next/head";
import Stairs from "@/components/stairs";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="hero min-h-96">
          <div className="hero-content text-center">
            <div className="flex justify-center items-center">
              <h1 className="text-7xl uppercase">Contact</h1>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}
