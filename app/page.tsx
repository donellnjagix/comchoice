"use client"
import { useEffect, useState } from "react";
import Nav from "./components/navbar/Nav"
import { SelectedPage } from "./types/types";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) return setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);

    // When the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>

      
      <div className="mt-8 sm:mt-12 md:mt-16">
      
      </div>

      <h1 className="text-center text-orange text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 md:mt-8">
        Our Design
      </h1>

   
    </main>
  );
}