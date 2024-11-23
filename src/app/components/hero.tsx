import Image from "next/image";

function Hero() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-purple-400 flex items-center justify-center">
        <div className="text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Governor Sindh
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Governor Sindh IT Initiative Program
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-orange-700 flex items-center">
        <div className="text-white flex px-6">
          <Image src="/governorpic.png" alt="Governor Pic" width={1200} height={1000} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
