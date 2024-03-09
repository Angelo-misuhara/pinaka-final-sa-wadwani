import { subtitle, title } from "@/components/primitives";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
const DesignCom = () => {
  return (
    <div className="inline-block max-w-lg text-center mt-[6rem] justify-center">
      <h1
        className={`${title()} text-6xl text-yellow-800 md:text-9xl font-black `}
      >
        Recent Designs and Transactions
      </h1>
      <div className={subtitle({ class: "mt-4 " })}>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/transaction1.jpg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DesignCom;
