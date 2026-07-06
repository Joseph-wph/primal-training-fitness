"use client";

import Link from "next/link";

export default function Primal() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between flex-col gap-40">
      <div className="w-full flex flex-col justify-center items-start gap-5 bg-secondary lg:p-5 p-10">
        <div className="w-full flex flex-col lg:flex-row justify-center lg:items-center items-start lg:gap-150 gap-5 p-5">
          <Link href="/">
            <img
              src="/assets/logo/logoFitnes.svg"
              alt="Fitness Logo"
              className="w-30 lg:w-50"
            />
          </Link>
          <h1 className="font-heading font-bold text-4xl whitespace-nowrap">
            Primal Training
          </h1>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-80">
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-heading font-bold text-lg">CONTACT</h1>
            <div className="text-xs font-bold">
              <p>Email : hello@figma.com</p>
              <p>Phone : (203) 555-5555</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-heading font-bold text-lg">OPENING HOURS</h1>
            <div className="flex gap-8">
              <div className="text-xs font-bold">
                <p>MON-FRI</p>
                <p>SATURDAYS</p>
                <p>SUNDAYS</p>
                <p>HOLIDAYS</p>
              </div>
              <div className="text-xs font-bold">
                <p>5:00-23:00</p>
                <p>8:00-16:00</p>
                <p>8:00-13:00</p>
                <p>8:00-16:00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-heading font-bold text-lg">SOCIAL</h1>
            <div className="text-xs font-bold underline">
              <p>Instagram</p>
              <p>X</p>
              <p>Linkedin</p>
              <p>Spotify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
