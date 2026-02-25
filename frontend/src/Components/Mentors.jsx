const Mentors = () => {
  const mentors = [
    { name: "Biplab Maity", role: "Senior Manager", image: "/Raksha.png" },
    { name: "Shubham Sumanl", role: "Publications", image: "/Raksha.png" },
    { name: "Akanksha Singh", role: "-", image: "/Raksha.png" },
    { name: "Muieeb Alam", role: "Industry Mentor", image: "/Raksha.png" },
    { name: "Stuti Nayak Panda", role: "-", image: "/Raksha.png" },
  ];

  const infiniteMentors = [...mentors, ...mentors]; // duplicate for infinite effect

  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
          Meet Our Industry Experts
        </h2>

        <div className="overflow-hidden">
          {/* Hover here pauses entire slider */}
          <div className="slider-track flex gap-8">
            {infiniteMentors.map((mentor, i) => (
              <div
                key={i}
                className="w-[160px] h-[200px] md:w-[260px] md:h-[280px] bg-white rounded-3xl  flex-shrink-0 flex flex-col items-center justify-center text-center p-4"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover mb-5 border-4 border-gray-100"
                />
                <h3 className="font-semibold md:text-lg text-sm text-gray-900">
                  {mentor.name}
                </h3>
                <p className="md:text-sm text-[12px] text-gray-500 mt-2">
                  {mentor.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .slider-track {
            animation: scroll 20s linear infinite;
          }

          .slider-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Mentors;