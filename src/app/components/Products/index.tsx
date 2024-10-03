import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <main   id='product' className="flex flex-col items-center max-w-7xl mb-20 mx-auto px-4 py-8 -mt-24 2xl:mt-0 " style={{ fontFamily: 'Inter, serif' }}>
      <h1 className="text-[#883418] text-4xl font-bold mt-24 mb-6">Product</h1>
      <p className="text-center text-xl mb-12 max-w-3xl text-20">
        <span className="text-[#883418] font-semibold">DishHub</span> is an innovative mobile app that enables you to easily organize <br />
        your pantry items and transform them into tasty meals. Become part of the <br />
        initiative to reduce food waste and ignite your culinary creativity.
      </p>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl -mb-20 pt-12">
        <div className="flex-1 flex justify-center mb-4 md:mb-0">
          <Image
            src="/images/one.png"
            alt="DishHub Home"
            height={500}
            width={250}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 flex justify-center mb-4 md:mb-0">
          <Image
            src="/images/two.png"
            alt="DishHub Recipes"
            height={500}
            width={250}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 flex justify-center mb-4 md:mb-0">
          <Image
            src="/images/three.png"
            alt="DishHub Recipe Details"
            height={500}
            width={250}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}



