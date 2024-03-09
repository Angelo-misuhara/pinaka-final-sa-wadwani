import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div
      className="inline-block max-w-lg text-center mt-[6rem] justify-center"
      id="aabout"
    >
      <h1
        className={`${title()} text-6xl md:text-9xl   font-black `}
      >
        About
      </h1>
      <h2 className={subtitle({ class: "mt-4   " })}>
        Welcome to InkersMNL, your one-stop destination for exceptional logo
        design and top-notch printing services. With a rich history in the
        artistry of print, we combine creativity with commitment to deliver
        standout designs and high-quality prints.Elevate your brand with
        InkersMNL – where creativity meets commitment, and every design is
        brought to life with vibrant colors and crisp details.
      </h2>
    </div>
  );
}
