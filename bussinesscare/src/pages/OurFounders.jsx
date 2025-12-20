import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function OurFounder() {
  return (
    <>
    <Navbar/>
      <div className="bg-yellow-500 text-gray-800">

        {/* ================= TOP IMAGE ================= */}
        <div className="w-full">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20220824-WA0016-2.jpg"
            alt="Founder Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ================= HEADING ================= */}
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700">
            OUR VIBRANT FOUNDER
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* ================= FOUNDER 1 ================= */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">
              Ms. POOJA SHARMA
            </h3>

            <p className="text-blue-600 font-bold mb-4">
              BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR |
            </p>

            <p className="text-black font-extrabold leading-relaxed mb-4">
              Young Entrepreneur, Senior Media person, and Business Trainer Pooja Sharma.
              Pooja Sharma is a well-known name in the country and has made a name for herself
              with her diverse talents.
            </p>

            <p className="text-black leading-relaxed">
              If we talk about media on television or acting on the small screen, she has ruled
              everyone’s hearts with her different style at a young age. Along with being a
              successful industrialist, she is also doing remarkable work in social upliftment
              for national growth. At a young age, she has registered the title of opening
              14 companies in 12 years.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/pooja_mam_sitting_Image-min.png"
              alt="Pooja Sharma"
              className="rounded-2xl  w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* ================= FOUNDER 2 ================= */}
        <div className="max-w-7xl  mx-auto px-6 py-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">
              Mr. ANKUR BANSAL
            </h3>

            <p className="text-blue-600 font-bold mb-4">
              BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR |
            </p>

            <p className="text-black font-semibold leading-relaxed mb-4">
              Co-founder, Entrepreneur, Business Coach, and Business Strategy Planner.
              Ankur Bansal has been doing business since the age of 12 and has given
              a new definition to media strategy in the TV media world.
            </p>

            <p className="text-black leading-relaxed">
              He is a successful industrialist with a multi-talented personality who
              understands business problems deeply and provides accurate solutions.
              With over 20 years of experience in TV media, Ankur has helped thousands
              of businessmen overcome losses and achieve growth. He has received many
              national and international awards and strongly believes that Indian
              businesses can grow only through innovation and modern techniques.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-17.11.48-e1681996399652.png"
              alt="Ankur Bansal"
              className="rounded-2xl  w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
