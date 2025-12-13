

export default function LowInvestmentBigBuzz() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-yellow-400">
            Low Investment, Big Buzz
          </h2>

          <p className="text-black leading-relaxed text-lg">
            Can your business flourish without spending a lot of money?
            What is the best way by which money will be spent less, and your name
            will be covered in the top 10.
          </p>

          {/* BUTTON WITHOUT IMPORT */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl px-8 py-4 text-lg shadow-lg flex items-center gap-2">
            📞 Call Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.41.21-e1681989444760-720x1080.png"
            alt="Low Investment Big Buzz"
            className="rounded-2xl  object-cover w-[700px] h-[1000px]"
          />
        </div>

      </div>
    </section>
  );
}
