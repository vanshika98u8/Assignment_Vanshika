import { Film, Palette, Clapperboard} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Film,
      title: 'Film Production',
      description: 'We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.',
    },
    {
      id: 2,
      icon: Clapperboard,
      title: 'Artcuration',
      description: 'Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong,Through every festival, every performance, and every gathering, we help stories find their stage and their people.',
    },
    {
      id: 3,
      icon: Palette,
      title: 'Branding',
      description: 'A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trustWe shape brands that people remember, return to, and fall in love with',
    },
   
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4 text-center">
          Our Services
        </h1>
        <p className="text-center text-lg text-gray-600 mb-16 font-serif">
          Comprehensive creative solutions tailored to your vision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white/60 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 border border-white/20"
              >
                <div className="mb-4 inline-block p-3 bg-[#ff5722]/10 rounded-lg group-hover:bg-[#ff5722]/20 transition-colors">
                  <IconComponent className="text-[#ff5722]" size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-serif">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-[#ff5722] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg mb-8 leading-relaxed font-serif">
            Every project is an opportunity to push creative boundaries and deliver exceptional results.
          </p>
          <button className="bg-white text-[#ff5722] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
        <img src="Frame 33.png" alt="Creative Illustration" className="width: 1920;
height: 113.47335052490234;
top: 966px;
angle: 0 deg;
opacity: 1;
" />
      </div>
    </div>
  );
}
