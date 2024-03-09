import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div
      className="inline-block max-w-lg text-center mt-[6rem] justify-center"
      id="aabout"
    >
      <h1 className={`${title()} text-6xl  md:text-9xl font-black `}>
        Designs
      </h1>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <div className="col-span-12 sm:col-span-4 h-[300px]">
          <div className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </div>
          <img
            src="/images/coo.png"
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 sm:col-span-4 h-[300px]">
          <div className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </div>
          <img
            src="/images/coo.png"
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 sm:col-span-4 h-[300px]">
          <div className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </div>
          <img
            src="/images/coo.png"
            alt="Card background"
            className="z-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[300px] col-span-12 sm:col-span-5">
          <div className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </div>
          <img
            src="/images/coo.png"
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          />
          <div className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <button className="text-tiny bg-primary rounded-full py-1 px-3">
              Notify Me
            </button>
          </div>
        </div>
        <div className="w-full h-[300px] col-span-12 sm:col-span-7">
          <div className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </div>
          <img
            src="/images/coo.png"
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
          />
          <div className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <img
                src="/images/coo.png"
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <button className="rounded-full py-1 px-3">Get App</button>
          </div>
        </div>
      </div>
    </div>
  );
}
