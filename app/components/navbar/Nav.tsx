'use client'
import Image from "next/image"
import logo from '@/public/images/logo.png';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Link from "next/link";
import TopStrip from '@/app/TopBar';


type Props = {};

const Nav = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const router = useRouter();

  return (
    <>
      <TopStrip />
      <div className="p-3 shadow-lg fixed top-8 z-30 w-full bg-white">
        <div className="flex justify-between items-center w-5/6 mx-auto">
          {/* image */}
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Image
              src={logo}
              alt="logo"
              height={90}
              width={90}
              className="object-cover"
            />
          </div>
          {/* links */}
          {isAboveMediumScreens ? (
            <div className="flex gap-4">
              <p
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                onClick={() => router.push("/")}
              >
                Home
              </p>
              <Link
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                href="/who"
              >
                Who We Are
              </Link>
              <Link
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                href="/what"
              >
                What We Do
              </Link>
              <Link
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                href="/clients"
              >
                clients
              </Link>
            </div>
          ) : (
            <button
              className="rounded-full bg-accent-orange p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-alice-blue drop-shadow-xl">
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="text-accent-black w-6 h-6" />
              </button>
            </div>
            {/* menu items */}
            <div className={`flex flex-col gap-10 ml-[33%] text-2xl`}>
              <p
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                onClick={() => router.push("/")}
              >
                Home
              </p>
              <Link
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                href="/who"
              >
                Who We Are
              </Link>
              <Link
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                href="/what"
              >
                what
              </Link>
              <Link
                className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
                href="/projects"
              >
                clients
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;