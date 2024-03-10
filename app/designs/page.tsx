import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <div className=" text-center mt-[6rem] justify-center" id="aabout">
        <h1 className={`${title()} text-6xl  md:text-9xl font-black `}>
          Designs
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        <div>
          <img src="/images/design1.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design2.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design3.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design4.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design5.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design6.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design7.png" alt="" className="w-[20rem]" />
        </div>
        <div>
          <img src="/images/design8.png" alt="" className="w-[20rem]" />
        </div>
      </div>
    </div>
  );
}
