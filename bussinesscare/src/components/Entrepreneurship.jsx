import { useNavigate } from "react-router-dom";
const WhyEntrepreneurFail = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-yellow-500 py-16 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-30-at-11.25.28-1-850x1280.png"
            alt="Entrepreneur Failure"
            className="rounded-xl "
            style={{
              width: "425px",      // half scale of 850
              height: "640px",     // half scale of 1280
              objectFit: "contain" // keeps natural shape
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-6xl font-bold text-[#420037]  leading-tight">
            Why Entrepreneurship Fail?
          </h2>

          <p className="text-lg text-white font-bold leading-relaxed">
            Insufficient marketing, wrong platforms, a lacklustre business plan or even wrong
            legal structure can prevent your business from thriving. The reasons why many
            entrepreneurs fail early are endless, some being unique to the business owner.
            So, don’t waste time — meet us and we will design a complete strategy to make you
            king in your industry, grow your business sales, and enhance your distribution network.
          </p>

          <button 
           onClick={() => navigate("/contact-us")}
          className="px-7 py-3 bg-[#420037] text-white font-bold rounded-full shadow-md hover:bg-yellow-800 transition">
            Get Appointment
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyEntrepreneurFail;
