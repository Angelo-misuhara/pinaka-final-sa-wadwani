import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
const DesignCom = () => {
  return (
    <div className="inline-block max-w-lg text-center mt-[6rem] justify-center">
      <h1
        className={`${title()} text-6xl text-yellow-800 md:text-9xl font-black `}
      >
        Recent Designs and Transactions
      </h1>
      <div
        className={subtitle({
          class:
            "mt-4 flex flex-col justify-center items-center md:grid md:grid-cols-3 md:grid-flow-row gap-4",
        })}
      >
        <img
          className="md:w-[20rem] w-[15rem] rounded-lg h-auto transition-transform transform scale-100 hover:scale-105"
          src="/images/transaction1.jpg"
          alt="Transaction Image 1"
        />
        <img
          className="md:w-[20rem] w-[15rem] rounded-lg h-auto transition-transform transform scale-100 hover:scale-105"
          src="/images/transaction2.png"
          alt="Transaction Image 2"
        />
        <img
          className="md:w-[30rem] w-[15rem] rounded-lg h-auto transition-transform transform scale-100 hover:scale-105"
          src="/images/transaction3.png"
          alt="Transaction Image 3"
        />
      </div>
      <div className="flex gap-3 justify-center items-center py-4">
        <Link
          isExternal
          href="/"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          More Designs
        </Link>
      </div>
    </div>
  );
};

export default DesignCom;
