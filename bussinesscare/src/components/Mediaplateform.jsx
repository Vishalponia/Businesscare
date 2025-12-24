import { PhoneIcon } from "@heroicons/react/24/solid";

export default function MediaPlatformSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-blue-100 py-0 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7">

          {/* Heading */}
          <h2 className="inline-block px-6 py-4  text-xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold  text-yellow-500 bg-[#F5E6F1]  rounded-2xl 
                   cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-[#420037]">
            How to Choose the Right Media Platforms
          </h2>

          {/* Text */}
          <p className="text-xl text-black leading-relaxed font-bold">
            If you do not do branding in business, how will you make a big brand?
            Will you tell them to be bigger just by seeing the competitors, or by 
            doing the right marketing planning? We will help you become a bigger 
            brand than them with powerful strategies and execution.
          </p>

          {/* Gold Button */}
          <button
           onClick={() => window.location.href = "tel:+917042438293"}
          className="flex items-center gap-3 
            bg-gradient-to-r from-yellow-500 to-yellow-700  
            hover:from-yellow-400 hover:to-yellow-600
            text-black px-8 py-3 rounded-xl text-lg 
            shadow-[0_0_20px_rgba(255,215,0,0.4)] 
            transition font-bold tracking-wide w-fit">
            <PhoneIcon 
            
            className="w-6 h-6 text-black" />
            Call Now
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-3xl p-1  ">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.42.13-e1681988905897.png"
              alt="Media Strategy"
              className="rounded-3xl w-[700px] h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
