import { useNavigate } from "react-router-dom";
export default function MediaStrategySection() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-blue-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            BIGGEST MEDIA STRATEGY CONSULTANTS
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            By understanding the business and understanding the customer of the business, we
            prepare the business strategy. If your business is just crawling for many years, 
            then we will help you to make your business a big brand of the country by our 
            unique techniques and ideas.
          </p>

          <button 
           onClick={() => navigate("/contact-us")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg shadow-lg transition font-semibold">
            Get Appointment
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.37.37-1.png"
            alt="Media Strategy"
            className="rounded-2xl  w-[800px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
