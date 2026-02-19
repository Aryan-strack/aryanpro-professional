import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Smith',
      role: 'CEO at TechStart',
      quote: 'Aryan delivered our project ahead of schedule with excellent quality. His AI integration skills are top-notch!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200'
    },
    {
      name: 'Michael Johnson',
      role: 'CTO at InnovateCo',
      quote: 'Working with Aryan was a pleasure. He understood our requirements perfectly and implemented them flawlessly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0?crop=faces&fit=crop&w=200&h=200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ 
              delay: 8000,
              disableOnInteraction: false
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-gray-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500'
            }}
            className="pb-16 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl mx-1">★</span>
                    ))}
                  </div>
                  
                  <FaQuoteLeft className="text-blue-500 text-3xl opacity-20 mx-auto mb-6" />
                  
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed relative">
                    <span className="absolute -top-6 left-0 text-blue-500 opacity-20 text-6xl">“</span>
                    {testimonial.quote}
                    <span className="absolute -bottom-6 right-0 text-blue-500 opacity-20 text-6xl">”</span>
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-blue-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
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