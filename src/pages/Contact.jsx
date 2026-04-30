import { useState } from 'react';
import { FiLinkedin, FiGithub, FiMessageSquare, FiDownload, FiMail, FiMapPin, FiArrowRight, FiSend } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ 
        success: true, 
        message: "Message received! I'll connect with you shortly." 
      });
      reset();
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "aryanahmad478@gmail.com",
      action: "mailto:aryanahmad478@gmail.com",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Vehari, Punjab, PAK",
      action: "#",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/aryan-ahmad-a5185133b", name: "LinkedIn" },
    { icon: <FiGithub />, url: "https://github.com/Aryan-strack", name: "GitHub" }
  ];

  return (
    <section className="py-32 bg-white dark:bg-gray-950 transition-colors duration-500 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Let's Connect</span>
          <h1 className="text-5xl md:text-7xl font-black mt-3 mb-8 text-gray-900 dark:text-white">
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Conversation</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Have a revolutionary idea? Let's collaborate and build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border border-gray-100 dark:border-white/5 shadow-2xl relative"
            >
              <AnimatePresence>
                {submitStatus && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`absolute top-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl z-20 ${
                      submitStatus.success ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Full Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-8 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white font-medium"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Address</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-full px-8 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Subject</label>
                  <input
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-8 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white font-medium"
                    placeholder="How can I help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Your Message</label>
                  <textarea
                    rows={6}
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-8 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white font-medium resize-none"
                    placeholder="Project details, timeline, budget..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Transmitting..." : <><FiSend /> Send Message</>}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactMethods.map((method, idx) => (
                <div key={idx} className="glass p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 group hover:shadow-xl transition-all duration-500">
                  <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{method.title}</h3>
                  <p className="text-gray-900 dark:text-white font-bold">{method.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border border-gray-100 dark:border-white/5"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Digital Footprint</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-[2rem] text-white shadow-2xl"
            >
              <h3 className="text-xl font-black mb-4">Resume</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">Interested in my full professional background? Download my detailed resume.</p>
              <a 
                href="/assets/Aryan.pdf" 
                download 
                className="w-full py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                <FiDownload /> Download PDF
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;