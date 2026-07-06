import Link from "next/link";

export default function JoinPrimal() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between flex-col">
      <div className="w-full flex flex-col justify-center items-center gap-5 py-30 bg-gray-100 border-b-2 border-black">
        <p className="text-sm">WHAT WE BELIEVE IN</p>
        <h1 className="text-4xl font-heading font-bold text-center">
          JOIN THE PRIMAL TRIBE TODAY!
        </h1>
        <ul>
          <li>

          </li>
        </ul>
        <Link href="/reserve" className="bg-primary px-4 py-2 text-xs rounded-sm cursor-pointer">RESERVE YOUR SPOT</Link>
      </div>
    </section>
  );
}