import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero.png')] bg-no-repeat bg-cover h-full w-full">
      <div className="container">
        <div className="grid grid-cols-12 gap-[1.875rem] py-[8.4rem]">
          <div className="flex items-start flex-col gap-4 col-span-6">
            <h1>Your Fable Begins Here</h1>
            <p className="py-3 max-w-[33.125rem]">
              Nam finibus pulvinar ullamcorper. Fusce nec gravida odio suscipit,
              risus nec facilisis aliquam, elit libero blandit.
            </p>
            <Link href="#" className="btn_yellow btn-1">
              Join Waitlist
            </Link>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-5 bg-[url('/images/video-bg.png')] bg-no-repeat !w-[26.75rem] !h-[26.75rem]">
            <Link href="#" className="h-full flex flex-col items-center justify-center cursor-pointer">
                <Image
                src="/icon/play.svg"
                alt="logo"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="!w-20 !h-20"
                />
                <span className="text-white">Watch Trailer</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
