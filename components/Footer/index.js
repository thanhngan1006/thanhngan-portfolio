import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-3 laptop:mt-32 p-2 laptop:p-0">
        <div>
          {/* <h1 className="text-2xl text-bold">Contact.</h1> */}
          <h1 className="text-4xl font-extrabold mb-10 text-bold">Contact.</h1>

          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by <a className="">Thanh Ngan</a>
      </h1>
    </>
  );
};

export default Footer;
