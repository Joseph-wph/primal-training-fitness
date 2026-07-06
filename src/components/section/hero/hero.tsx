export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-2 flex items-center justify-between flex-col">
      {/* Text */}
      <div className="w-full flex justify-start">
        <h1 className="text-4xl lg:text-8xl font-bold font-heading py-2">
          TRAIN H ARD. <span className="text-primary">LIVE</span>
        </h1>
      </div>

      {/* Image and Text */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* Atas */}
        <div className="grid lg:grid-cols-[2fr_1fr] w-full h-[480px]">
          <img
            src="/assets/image/image1.svg"
            alt="Image Fitness 1"
            className="w-full h-full object-cover"
          />

          <div className="bg-secondary p-5 flex flex-col gap-10 lg:gap-40 border border-black">
            <h1 className="font-heading text-5xl font-bold w-70">
              FOR THE COMMITTED
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-sm">
                Train like an athlete with top-tier equipment and expert v
                programming. Whether you're building muscle or breaking PRs, we
                help you push past limits.
              </p>
              <p className="text-sm">ABOUT US</p>
            </div>
          </div>
        </div>

        {/* Bawah */}
        <div className="grid lg:grid-cols-3 w-full">
          <div className="bg-secondary border border-black p-5 flex flex-col gap-10 lg:gap-50 lg:order-1 order-2">
            <h1 className="font-heading text-5xl font-bold w-70">
              GUIDED BY EXPERTS
            </h1>
            <p>
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>
          <div className="bg-secondary border border-black p-5 flex flex-col gap-10 lg:gap-50 lg:order-2 order-3">
            <h1 className="font-heading text-5xl font-bold w-70">
              DYNAMIC OPEN GYM
            </h1>
            <p>
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>
          <img src="assets/image/image2.svg" alt="Image Foitness 2" className="w-full h-full object-cover lg:order-3 order-1"/>
        </div>
      </div>
    </section>
  );
}
