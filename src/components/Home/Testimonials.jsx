import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Anderson',
      role: 'Product Lead at Meta',
      quote: 'Aryan is an exceptional developer who combines technical mastery with a keen eye for design. His work on our AI integration was transformative.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200'
    },
    {
      name: 'David Chen',
      role: 'Founder of CloudScale',
      quote: "One of the most reliable developers I've worked with. His ability to navigate complex full-stack challenges while keeping UX a priority is rare.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0?crop=faces&fit=crop&w=200&h=200'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Creative Director',
      quote: 'The level of detail and polish Aryan brings to every project is outstanding. He doesn’t just build features; he builds experiences.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=200&h=200'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stories</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take my word for it. Here's what my collaborators have to say.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="pb-20 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group p-10 h-full rounded-[2.5rem] glass border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400" size={16} />
                    ))}
                  </div>
                  
                  <div className="relative mb-10">
                    <FaQuoteLeft className="text-blue-600/10 dark:text-blue-400/10 text-8xl absolute -top-10 -left-6 -z-1" />
                    <p className="text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed italic relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/5 pt-8">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;