import { useNavigate } from "react-router-dom";

export default function BusinessCarePossible() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#420037]">
      {/* ONLY IMAGE + CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 sm:py-12 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* CONTENT */}
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* <h2 className="text-xl  bg-[#F5E6F1] rounded-2xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold text-yellow-500 leading-snug">
              BUSINESS CARE 
              MAKING IMPOSSIBLE POSSIBLE
            </h2>  */}
            <h2 className="
             inline-block px-6 py-4  text-xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold  text-yellow-500 bg-[#F5E6F1]  rounded-2xl 
                   cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-[#420037]">
                     BUSINESS CARE <br/>
                    MAKING IMPOSSIBLE POSSIBLE
            </h2>

            <br/>
            <br/>

            <p className="text-sm sm:text-base md:text-lg text-yellow-400 leading-relaxed font-medium">
              Let&apos;s Change The Strategy. By India’s Most Recent Business Coaches & Business
              Strategy Media Experts SINCE 14 YEARS.
              <br /><br />
              Business Advisor, Counsellor & Consultant.
              <br />
              Pan India More Than Thousand Business Owners Taking His Advises For Business Enhancement.
              <br /><br />
              Business Owners Rely On Ankur Bansal’s Strategies.
              <br />
              More Than Thousands of Business Owners and their teams are Implementing What
              Ankur Bansal Taught them.
            </p>

            <button
              onClick={() => navigate("/contact-us")}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-md hover:bg-blue-700 transition"
            >
              LET’S WORK TOGETHER
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.20.19-e1681987481804.png"
              alt="Business Care Expert"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
