import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import profilePic from "../public/logo1.png";
import Link from "next/link";

type Props = {};

function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Creator", "UX/UI designer", "Web developer", "Urban designer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-4 items-center justify-center
    text-center overflow-hidden "
    >
      <BackgroundCircle />

      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={profilePic}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[2px]">
          Hi! I am Mingyang Sun. You can call me Mia or MS.
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3"> I am a {text}</span>
          <Cursor cursorColor="orange" />
        </h1>

        <div className="pt-10">
          <Link className="mx-2" href="#about">
            <button className="introButton">About Me</button>
          </Link>
          <Link className="mx-2" href="#skills">
            <button className="introButton">My Skills</button>
          </Link>
          <Link className="mx-2" href="#projects">
            <button className="introButton">More Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
