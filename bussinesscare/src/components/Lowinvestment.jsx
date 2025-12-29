export default function LowInvestmentBigBuzz() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 sm:py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* CONTENT */}
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="inline-block px-6 py-4  text-xl sm:text-3xl md:text-xl lg:text-xl font-bold  text-white bg-[#420037]  rounded-3xl 
                   cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-[#420037]">
              Low Investment, Big Buzz
            </h2>

            <p className="text-black leading-relaxed text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Can your business flourish without spending a lot of money?
              What is the best way by which money will be spent less, and your name
              will be covered in the top 10.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button 
               onClick={() => window.location.href = "tel:+917042438293"}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl px-7 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shadow-lg flex items-center gap-2">
                📞 Call Now
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-4 lg:mt-0">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.41.21-e1681989444760-720x1080.png"
              alt="Low Investment Big Buzz"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

