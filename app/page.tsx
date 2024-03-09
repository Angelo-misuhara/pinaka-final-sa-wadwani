// import necessary modules and components
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DesignCom from "@/components/DesignCom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={`${title()} text-6xl md:text-9xl font-black `}>
          Inkers
          <span className="text-blue-800">M</span>
          <span className="text-red-800">N</span>
          <span className="text-yellow-800">L</span>
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Color Your Ventures With InkersMNL.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Meet Our Team
        </Link>
      </div>
      <div className="inline-block max-w-lg text-center mt-[6rem] justify-center">
        <h1
          className={`${title()} text-6xl text-blue-800 md:text-9xl font-black `}
        >
          About
        </h1>
        <h2 className={subtitle({ class: "mt-4 text-start md:text-center " })}>
          Welcome to InkersMNL, your one-stop destination for exceptional logo
          design and top-notch printing services. With a rich history in the
          artistry of print, we combine creativity with commitment to deliver
          standout designs and high-quality prints.Elevate your brand with
          InkersMNL – where creativity meets commitment, and every design is
          brought to life with vibrant colors and crisp details.
        </h2>
      </div>

      <div className="inline-block max-w-lg text-center mt-[6rem]  justify-center">
        <h1
          className={`${title()} text-6xl text-red-800 md:text-9xl font-black `}
        >
          why us?
        </h1>
        <div className="mt-6 flex flex-col gap-3  text-start  w-[20rem] md:w-[30em]">
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold">Expert Printing Expertise :</h1>
            <p className="border-b-1 pb-2">
              InkersMNL excels in high-quality logo printing, showcasing
              expertise that guarantees standout results.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold">Meticulous Attention to Detail :</h1>
            <p className="border-b-1 pb-2">
              Our commitment to excellence is evident in the careful attention
              we give to every detail, ensuring a polished and professional
              final logo.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold">Customized Solutions :</h1>
            <p className="border-b-1 pb-2">
              InkersMNL offers tailor-made logo designs, uniquely crafted to
              align seamlessly with your brand identity, ensuring a distinctive
              and memorable representation.
            </p>
          </div>
        </div>
      </div>
      <DesignCom />
    </section>
  );
}
