import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Collaps } from "../components/Collaps";
import { data, sidebarData } from "../database/data";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>WorldGeek</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" className="rounded-full" />
      </Head>
      <main>
        <div className="lg:flex flex-wrap justify-between bg-black">
          <div className={`lg:w-1/5 bg-base-300 p-4 lg:min-h-screen bg-black`}>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-4">
                <span className="border-b-4 border-red-500 text-red-200">
                  World
                </span>
                <span className="text-red-500">Geek</span>
              </h1>

              <label className="btn btn-circle swap swap-rotate lg:hidden">
                <input
                  type="checkbox"
                  onClick={toggleSidebar}
                  className="lg:hidden"
                />

                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <div
              className={`lg:block ${
                sidebar ? "block" : "hidden"
              } transition-all ease-in duration-300`}
            >
              <div className="py-4 flex flex-col items-center justify-center gap-8">
                {sidebarData.map((item, index) => {
                  return (
                    <div key={index}>
                      <h2 key={index} className="uppercase font-bold text-xl text-white">
                        {item.category}
                      </h2>
                      {item.subcategory.map((s, i) => {
                        return <Collaps key={i} title={s} elements={data} />;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-4/5 text-center mt-12">
            <h2 className="text-6xl font-bold text-violet-200">
              <span className="border-b-8 border-red-500">World</span>
              <span className="text-red-500">Geek</span>
            </h2>
           
          </div>
        </div>
      </main>
    </>
  );
}
