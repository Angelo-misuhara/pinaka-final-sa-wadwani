import React from "react";
import { title, subtitle } from "@/components/primitives";
// import { Image } from "@nextui-org/react";
const DesignCom = () => {
  return (
    <div className="inline-block max-w-lg text-center mt-[6rem] justify-center">
      <h1
        className={`${title()} text-6xl text-yellow-800 md:text-9xl font-black `}
      >
        Recent Designs and Transactions
      </h1>
      <div className={subtitle({ class: "mt-4 " })}></div>
    </div>
  );
};

export default DesignCom;
