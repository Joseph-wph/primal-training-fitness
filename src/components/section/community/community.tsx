export default function Community() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between flex-col">
      {/* Text */}
      <div className="w-full flex justify-start">
        <h1 className="text-3xl lg:text-8xl font-bold font-heading ">
          JOIN THE <span className="text-primary">COMMUNITY</span>
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-stretch">
        {/* Kiri */}
        <div className="flex flex-col lg:order-1 order-2">
          <div className="border border-black bg-secondary">
            <h1 className="text-4xl font-heading font-bold p-5">
              DISCOVER YOUR POTENTIAL
            </h1>
          </div>
          <div className="border border-black bg-secondary p-5">
            <h1 className="font-heading font-bold text-xl">EXPERT COACING</h1>
            <p className="text-sm lg:w-70">
              Trainers who are passionate about your progress.
            </p>
          </div>
          <div className="border border-black bg-secondary p-5">
            <h1 className="font-heading font-bold text-xl">
              RESULTS-DRIVEN PROGRAMS
            </h1>
            <p className="text-sm lg:w-70">
              Workouts that deliver tangible, measurable results.
            </p>
          </div>
          <div className="border border-black bg-secondary p-5">
            <h1 className="font-heading font-bold text-xl">
              A SUPPORTIVE TRIBE
            </h1>
            <p className="text-sm lg:w-80">
              A community that pushes you to be your best.
            </p>
          </div>
          <div className="border border-black bg-secondary p-7 flex items-center justify-center">
            <p className="text-sm lg:w-80">
             VIEW CLASSES
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex lg:order-2 order-1">
          <img src="/assets/image/image3.svg" alt="Fitness Image" className="h-full object-cover"/>
        </div>
      </div>
    </section>
  );
}
