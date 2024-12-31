import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50 min-h-screen">
      {/* Left Side - Company Introduction */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to{" "}
          <span className=" font-bold text-yellow-600">Duck Company</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          We are a forward-thinking company dedicated to innovation, quality,
          and exceptional service. Our goal is to make the world a better place
          through cutting-edge technology and unparalleled expertise.
        </p>
        <button className="mt-6 px-6 py-3 text-black bg-yellow-600 hover:bg-yellow-700 rounded-lg shadow">
          Learn More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="https://i.pinimg.com/736x/b3/58/7b/b3587b45f82e831a3d0efacc89e9237c.jpg"
          alt="Company Vision"
          className="max-w-full h-auto rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
