import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { HeartFilledIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
const MeetTeam = () => {
  return (
    <div
      className="inline-block max-w-lg text-center mt-[6rem] justify-center"
      id="tteam"
    >
      <h1 className={`${title()} text-6xl  font-black trax `}>Meet The Team</h1>
      <div
        className={subtitle({
          class:
            "mt-11 flex flex-col justify-center items-center md:grid md:grid-cols-3 md:grid-flow-row gap-2 md:gap-8    ",
        })}
      >
        <div className="">
          <img
            src="/images/cto-removebg-preview.png"
            alt=""
            className="border rounded-full w-[10rem] "
          />
          <div className="flex flex-col md:gap-2">
            <h1 className="font-semibold">CTO</h1>
            <h3>Yocor, Angelo</h3>
          </div>
        </div>
        <div className="">
          <img
            src="/images/ceo-removebg-preview.png"
            alt=""
            className="border rounded-full w-[10rem] "
          />
          <div className="flex flex-col md:gap-2">
            <h1 className="font-semibold">CEO</h1>
            <h3>Saturno, M-jey</h3>
          </div>
        </div>
        <div className="">
          <img
            src="/images/cooo-removebg-preview.png"
            alt=""
            className="border rounded-full w-[10rem] "
          />
          <div className="flex flex-col md:gap-2">
            <h1 className="font-semibold">COO</h1>
            <h3>Garcia, Charles</h3>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] md:mt-[10rem]">
        <Button
          isExternal
          as={Link}
          className="text-sm font-normal text-default-600 bg-default-100"
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=yocorangelo18@gmail.com"
          startContent={<HeartFilledIcon className="text-danger" />}
          variant="flat"
        >
          Transform Your Brand Today!
        </Button>
      </div>
    </div>
  );
};

export default MeetTeam;
