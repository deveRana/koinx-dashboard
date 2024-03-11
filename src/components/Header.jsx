import React from "react";

const Header = () => {
  const handleMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white shadow-lg p-2 sm:px-4 md:px-8 lg:px-10 xl:px-16 ">
      <div className="w-full  flex justify-between">
        <div>
          <a href="#">
            <img
              src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
              alt=""
              className="w-24"
            />
          </a>
        </div>

        {/* menu links */}
        <div class="hidden md:flex items-center ">
          <a
            href="#"
            class="px-3 text-[14px] text-[#0F1629] hover:text-[#266AEB] font-semibold"
          >
            Crypto Taxes
          </a>
          <a
            href="#"
            class="px-3 text-[14px] text-[#0F1629] hover:text-[#266AEB] font-semibold"
          >
            Free Tools
          </a>
          <a
            href="#"
            class="px-3 text-[14px] text-[#0F1629] hover:text-[#266AEB] font-semibold"
          >
            Resource Center
          </a>
          <button className="ml-8 text-white bg-[#266AEB] px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>

        {/* mobile button goes here */}
        <div className="md:hidden flex items-center" onClick={handleMenu}>
          <button className="mobile-menu-button">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-menu hidden  md:hidden p-5">
        <a
          href="#"
          class="block py-3 hover:text-[#266AEB] text-base text-[#0F1629] font-semibold"
        >
          Crypto Taxes
        </a>
        <a
          href="#"
          class="block py-3 hover:text-[#266AEB] text-base text-[#0F1629] font-semibold"
        >
          Free Tools
        </a>
        <a
          href="#"
          class="block py-3 hover:text-[#266AEB] text-base text-[#0F1629] font-semibold"
        >
          Resource Center
        </a>
        <button className="block text-white bg-[#266AEB] px-6 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;
