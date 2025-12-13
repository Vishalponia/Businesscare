import { useNavigate } from "react-router-dom";
const BusinessCarePossible = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#420037] ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 leading-snug">
            BUSINESS CARE <br /> MAKING IMPOSSIBLE POSSIBLE
          </h2>

          <p className="text-lg text-yellow-400 leading-relaxed font-medium">
            Let&apos;s Change The Strategy. By India’s Most Recent Business Coaches & Business 
            Strategy Media Experts SINCE 14 YEARS.<br /><br />
            Business Advisor, Counsellor & Consultant.<br />
            Pan India More Than Thousand Business Owners Taking His Advises For Business Enhancement.<br /><br />
            Business Owners Rely On Ankur Bansal’s Strategies.<br />
            More Than Thousands of Business Owners and their teams are Implementing What 
            Ankur Bansal Taught them.
          </p>

          <button 
           onClick={() => navigate("/contact-us")}
          className="px-7 py-3 bg-blue-600 text-white rounded-full font-bold shadow-md hover:bg-blue-700 transition">
            LET’S WORK TOGETHER
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.20.19-e1681987481804.png"
            alt="Business Care Expert"
            className="rounded-xl "
            style={{
              width: "733px",     // scaled perfectly (half of 733)
              height: "891px",    // scaled proportionally (half of 891)
              objectFit: "contain"
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default BusinessCarePossible;
