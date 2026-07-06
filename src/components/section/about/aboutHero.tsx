export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20">
      <h1 className="lg:text-7xl text-4xl font-heading font-bold p-2">
        ABOUT US
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Gambar kanan atas - Mobile urutan 1 */}
        <div className="order-1 lg:order-2 h-[225px] lg:h-[480px] overflow-hidden">
          <img
            src="/assets/image/image4.svg"
            alt="Image Fitness 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text kiri atas - Mobile urutan 2 */}
        <div className="order-2 lg:order-1 lg:col-span-2 min-h-[404px] lg:h-[480px] bg-primary">
          <div className="flex flex-col justify-between h-full p-6">
            <h1 className="font-heading font-bold text-[40px] lg:text-[45px] max-w-[280px] lg:max-w-[700px] leading-none">
              TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU.
            </h1>

            <div className="mt-5">
              <p className="font-heading font-bold text-xl lg:text-2xl mb-0">
                Our Vision
              </p>

              <p className="text-sm lg:text-base">
                Primal Training is committed to delivering a training experience
                rooted in raw strength, functional fitness, and unwavering
                community support. We empower our members to tap into their
                primal power, achieve their goals, and live a life of strength,
                resilience, and unwavering determination.
              </p>
            </div>
          </div>
        </div>

        {/* Gambar kiri bawah - Mobile urutan 3 */}
        <div className="order-3 lg:col-span-2 h-[225px] lg:h-[480px] overflow-hidden">
          <img
            src="/assets/image/image5.svg"
            alt="Image Fitness 5"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text kanan bawah - Mobile urutan 4 */}
        <div className="order-4 h-[250px] lg:h-[480px] bg-secondary">
          <div className="flex flex-col justify-between h-full p-6">
            <h1 className="font-heading font-bold text-3xl lg:text-[45px] lg:max-w-[400px] max-w-[250px]">
              DYNAMIC OPEN GYM
            </h1>

            <p className="text-sm lg:text-base">
              At Primal Training, we strip away the fluff and focus on the
              fundamentals. Our expert coaches guide you through intense,
              functional workouts designed to build raw strength, resilience,
              and a body capable of anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
