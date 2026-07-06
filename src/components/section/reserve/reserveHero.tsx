import Link from "next/link";

export default function ReserveHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20">
      <div className="flex flex-col">
        <h1 className="font-heading font-bold lg:text-7xl text-3xl py-2">
          BOOK A <span className="text-primary">SESSION</span>
        </h1>

        <div className="w-full flex flex-col lg:flex-row">
          {/* Strength */}
          <div className="bg-secondary p-5 flex flex-col gap-20 max-w-[426px] h-[480px] border border-black">
            <h1 className="font-heading font-bold text-4xl">STRENGTH</h1>
            <div className="flex flex-col gap-5">
              <p className="border-b-2 border-black">Weekdays at 6AM</p>
              <p className="border-b-2 border-black">
                Weekends and Holidays at 8AM
              </p>
              <p>
                Build a foundation of raw power with our comprehensive
                weightlifting and strength training programs.
              </p>
            </div>
            <ul>
              <li>
                <Link
                  href="/reserve"
                  className="hover:text-white text-black bg-primary px-5 py-2 rounded-lg text-center block w-full text-[15px]"
                >
                  RESERVE YOUR SPOT
                </Link>
              </li>
            </ul>
          </div>

          {/* Conditioning */}
          <div className="bg-secondary p-5 flex flex-col gap-20 max-w-[426px] h-[480px] border border-black">
            <h1 className="font-heading font-bold text-4xl">CONDITIONING</h1>
            <div className="flex flex-col gap-5">
              <p className="border-b-2 border-black">Weekdays at 8AM</p>
              <p className="border-b-2 border-black">
                Weekends and Holidays at 10AM
              </p>
              <p>
                Push your limits with high-intensity workouts that challenge
                your cardiovascular endurance and build functional fitness.
              </p>
            </div>
            <ul>
              <li>
                <Link
                  href="/reserve"
                  className="hover:text-white text-black bg-primary px-5 py-2 rounded-lg block w-full text-center text-[15px]"
                >
                  RESERVE YOUR SPOT
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Classes */}
          <div className="bg-secondary p-5 flex flex-col gap-21 max-w-[426px] h-[480px] border border-black">
            <h1 className="font-heading font-bold text-4xl max-w-[220px]">
              COMMUNITY CLASSES
            </h1>
            <div className="flex flex-col gap-5">
             
              <p className="border-b-2 border-black">Everyday on the hour</p>
              <p>
                Experience the power of collective effort with our custom
                Workout of the Day. Push your limits alongside like-minded
                individuals.
              </p>
            </div>
            <ul>
              <li>
                <Link
                  href="/reserve"
                  className="hover:text-white text-black bg-primary px-5 py-2 rounded-lg block w-full text-center text-[15px]"
                >
                  RESERVE YOUR SPOT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
