import Image from "next/image";

export default function Team() {
    const teamMembers = [
      {
        name: "Zippy Waluse",
        image: "/images/waluse.jpg",
        role: "Software Developer",
      },
      {
        name: "Mercy Chemtai",
        image: "/images/Chemtai.jpeg",
        role: "Software Developer",
      },
      {
        name: "Scarlet Alkeyo",
        image: "/images/scarlet.jpg",
        role: "Software Developer",
      },
      {
        name: "Mumina Abdo",
        image: "/images/mumina.jpg",
        role: "Software Developer",
      },
      {
        name: "Edna Kesa",
        image: "/images/edna.jpg",
        role: "Software Developer",
      },
    ];

    return (
      <div id="team"  className="px-4 py-6 mt-10 mx-auto max-w-screen-xl" style={{ fontFamily: 'Inter, serif' }}>
        <main className="mt-12">
          <div className="text-center text-4xl ">
            <h1 className="font-bold text-5xl sm:text-4xl md:text-4xl text-[#F8A11B] mt-3 md:mb-2 sm:mt-4 md:mt-5">
              Team
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-6 lg:gap-8 xl:gap-10">
            <div className="bg-white mx-auto col-span-1 flex flex-col items-center text-center mt-4 mb-10">
              <p className="text-xl sm:text-base md:text-2xl lg:text-3xl mt-4 sm:mt-9 -mb-6 ">
                The Team That <br /> Turns Dreams <br /> Into Reality
              </p>
            </div>

            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white flex flex-col items-center text-center p-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-64 sm:w-72 md:w-60 object-cover mb-1" 
                />
                <figcaption className="text-center mt-2 -mb-4">
                  <div className="text-black text-lg sm:text-xl font-semibold">{member.name}</div>
                  <div className="text-gray-700 text-md">{member.role}</div>
                </figcaption>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
}