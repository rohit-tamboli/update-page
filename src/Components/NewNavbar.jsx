import React, { useRef, useState } from "react";

const NewNavbar = ({ activeSection, scrollToSection, refs }) => {
  const navItems = [
    { id: "why", label: "Why Choose This Course?" },
    { id: "learn", label: "What will you learn?" },
    { id: "instructors", label: "Instructors" },
    { id: "process", label: "Admission Process" },
    { id: "qualifier", label: "QualifierTest" },
    { id: "contact", label: "Contact Us" },
    { id: "about", label: "About Us" },
  ];

  const scrollRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Arrow Scroll
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  // Mouse Wheel Horizontal Scroll
  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  // Drag Scroll (Desktop)
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="fixed md:top-0 top-15 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center px-0 md:px-0">
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="px-2 md:px-4 text-xl md:text-2xl font-bold text-gray-600 hover:text-red-600 transition"
        >
          <img src="./left-arrow.png" alt="" width="15px" />
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp} 
          onMouseMove={handleMouseMove}
          className="flex gap-0 md:gap-0 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar flex-1 cursor-grab active:cursor-grabbing"
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(refs[item.id])}
              className={`relative flex-shrink-0 px-4 md:px-6 md:py-6 py-4 cursor-pointer transition-all duration-300 ${
                activeSection === item.id ? "bg-red-50" : ""
              }`}
            >
              <p
                className={`text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeSection === item.id ? "text-red-600" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>

              <div
                className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full bg-gradient-to-r from-red-500 to-red-700"
                    : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="px-2 md:px-4 text-xl md:text-2xl font-bold text-gray-600 hover:text-red-600 transition"
        >
          <img src="./right-arrow.png" alt="" width="15px" />
        </button>
      </div>
    </div>
  );
};

export default NewNavbar;
