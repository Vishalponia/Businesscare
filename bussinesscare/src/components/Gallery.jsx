export default function Gallery() {
  const images = [
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221013-WA0030.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/20220218_191740-1335x2048.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20220722-WA0012.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-7.40.15-PM.jpeg",
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-100 to-blue-500 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Stylish Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide drop-shadow-sm">
          <span className="bg-yellow-500 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>

        <p className="text-yellow-500 mt-3 font-bold text-xl">
          Moments, Events & Powerful Strategies
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-72 object-fit group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
