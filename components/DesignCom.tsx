import { subtitle, title } from "@/components/primitives";

const DesignCom = () => {
  return (
    <div className="inline-block max-w-lg text-center mt-[6rem] justify-center">
      <h1
        className={`${title()} text-6xl text-yellow-800 md:text-9xl font-black `}
      >
        Recent Designs and Transactions
      </h1>
      <div className={subtitle({ class: "mt-4 " })}>
        <img
          src='/images/transaction1.jpg'
        />
      </div>
    </div>
  );
};

export default DesignCom;
