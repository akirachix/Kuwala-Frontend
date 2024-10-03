import Image from 'next/image';

export default function Aboutpage() {
  return (
    <main id='About' className='bg-orange-900 py-10 2xl:mt-20 px-4 mx-auto text-center'>
      <div className="gap-[-1%] flex flex-col md:flex-row lg:flex-row items-center max-w-7xl mx-auto -mt-40 mb-10" style={{ fontFamily: 'Inter, serif' }}>
        <div className="flex-shrink-0 mt-40 -mb-12 md:mb-0 md:mr-3">
          <Image
            src="/images/food.png"
            width={2500}
            height={1000}
            alt="Food"
            className="ml-[0%] mt-10 w-full max-w-full md:max-w-2xl md:w-[400px] lg:max-w-3xl"
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-28 -mb-10">
          <h2 className='text-white sm:text-center 2xl:text-start text-4xl md:text-3xl lg:text-4xl mb-4 font-bold'>
            About Us
            <br />
          </h2>
          <p className='text-white  md:text-lg xl:text-xl sm:text-xs text-xl lg:w-[550px] mb-2 mt-10 text-start'>
            Join Kuwala in the fight against food waste! Did you know that 1/3 of all food produced goes to waste? 
            It impacts our wallets and our world. Lets empower each other to make a change - together, we can save food and 
            create a brighter future. We believe that by working together, we can reduce food waste and make a positive impact.
          </p>
        </div>
      </div>
    </main>
  );
}