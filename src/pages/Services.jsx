import { useState } from 'react';
import { 
  FiCheckCircle, 
  FiClock, 
  FiLayers, 
  FiCode, 
  FiX, 
  FiMessageSquare,
  FiStar,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiSmartphone,
  FiCpu
} from 'react-icons/fi';
import { useLottie } from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import webDevAnimation from './lottie/web-development.json';
import flutterAnimation from './lottie/flutter.json';
import aiAnimation from './lottie/ai.json';

const ServicesSection = () => {
  // Enhanced Lottie Animations
  const webOptions = { 
    animationData: webDevAnimation, 
    loop: true,
    autoplay: true
  };
  const flutterOptions = { 
    animationData: flutterAnimation, 
    loop: true,
    autoplay: true
  };
  const aiOptions = { 
    animationData: aiAnimation, 
    loop: true,
    autoplay: true
  };

  const { View: WebDevLottie } = useLottie(webOptions);
  const { View: FlutterLottie } = useLottie(flutterOptions);
  const { View: AILottie } = useLottie(aiOptions);

  // State management
  const [activeTab, setActiveTab] = useState("services");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    plan: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Enhanced Services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "High-performance websites and web applications built with modern frameworks for optimal speed, SEO, and user experience.",
      lottie: WebDevLottie,
      icon: <FiGlobe className="text-indigo-600" size={24} />,
      tech: ["React", "Next.js", "Tailwind", "Node.js", "GraphQL"],
      features: [
        "SEO-optimized architecture",
        "Mobile-responsive design",
        "CMS Integration",
        "API Development",
        "Performance optimization",
        "Web accessibility compliance"
      ],
      stats: [
        { value: "99%", label: "Performance Score" },
        { value: "4.9/5", label: "Client Rating" },
        { value: "24h", label: "Avg. Response Time" }
      ]
    },
    {
      id: 2,
      title: "Flutter App Development",
      description: "Beautiful cross-platform mobile apps with native performance using a single codebase for both iOS & Android platforms.",
      lottie: FlutterLottie,
      icon: <FiSmartphone className="text-indigo-600" size={24} />,
      tech: ["Flutter", "Dart", "Firebase", "BLoC", "GetX"],
      features: [
        "60FPS smooth animations",
        "Platform-specific UIs",
        "Offline-first approach",
        "App Store deployment",
        "Push notifications",
        "In-app purchases"
      ],
      stats: [
        { value: "2x", label: "Faster Development" },
        { value: "95%", label: "Code Reuse" },
        { value: "4.8/5", label: "Store Rating" }
      ]
    },
    {
      id: 3,
      title: "AI Solutions",
      description: "Cutting-edge AI integrations including machine learning, computer vision, and natural language processing for your business.",
      lottie: AILottie,
      icon: <FiCpu className="text-indigo-600" size={24} />,
      tech: ["Python", "TensorFlow", "OpenCV", "ChatGPT API", "LangChain"],
      features: [
        "Custom chatbots",
        "Image/Video analysis",
        "Predictive analytics",
        "Process automation",
        "Sentiment analysis",
        "Recommendation engines"
      ],
      stats: [
        { value: "40%", label: "Efficiency Gain" },
        { value: "3x", label: "ROI Increase" },
        { value: "4.7/5", label: "Accuracy" }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,500",
      duration: "for small projects",
      features: [
        "Up to 5 pages",
        "Basic SEO optimization",
        "1 revision round included",
        "Mobile-responsive design",
        "2-week delivery",
        "1 month support"
      ],
      bestFor: "Personal websites, MVPs, small businesses",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,900",
      duration: "for growing businesses",
      features: [
        "Up to 15 pages",
        "Advanced SEO strategy",
        "3 revision rounds",
        "CMS Integration",
        "Custom animations",
        "4-week delivery",
        "3 months support"
      ],
      bestFor: "Business websites, SaaS apps, portfolios",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "tailored solutions",
      features: [
        "Unlimited scope",
        "Dedicated development team",
        "Priority support",
        "Scalable architecture",
        "Ongoing maintenance",
        "Performance monitoring",
        "Security audits"
      ],
      bestFor: "E-commerce, complex web apps, large organizations",
      popular: false
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setFormData(prev => ({ ...prev, plan: plan.name }));
    setShowContactForm(true);
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ 
        success: true, 
        message: "Thank you for your inquiry! We'll contact you within 24 hours." 
      });
      setFormData({
        name: '',
        email: '',
        message: '',
        plan: formData.plan
      });
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: "Failed to send message. Please try again or email us directly." 
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Comprehensive <span className="text-indigo-600 dark:text-indigo-400">Digital Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            End-to-end services tailored to your business needs, from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* Toggle between Services and Pricing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg shadow-gray-200 dark:shadow-gray-900/50">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "services"
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Service Catalog
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "pricing"
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Pricing Plans
            </button>
          </div>
        </motion.div>

        {activeTab === "services" ? (
          <>
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="h-56 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="w-40 h-40 absolute -right-10 -bottom-10 opacity-20 group-hover:opacity-30 transition-opacity">
                      {service.icon}
                    </div>
                    <div className="w-48 h-48 z-10">
                      {service.lottie}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-1 rounded-full text-xs">
                        <FiStar className="mr-1" />
                        Popular
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech) => (
                          <motion.span 
                            key={tech} 
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1.5 rounded-full flex items-center"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <FiCheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Me */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-2xl shadow-gray-200 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 mb-20"
            >
              <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                My <span className="text-indigo-600 dark:text-indigo-400">Development</span> Approach
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <FiClock className="text-indigo-500" size={24} />,
                    title: "On-Time Delivery",
                    desc: "97% of projects delivered before deadline with clear milestones"
                  },
                  {
                    icon: <FiTrendingUp className="text-indigo-500" size={24} />,
                    title: "Scalable Solutions",
                    desc: "Modular architecture designed for future growth and expansion"
                  },
                  {
                    icon: <FiCode className="text-indigo-500" size={24} />,
                    title: "Clean Code",
                    desc: "Well-documented, linted, and tested production-ready code"
                  },
                  {
                    icon: <FiShield className="text-indigo-500" size={24} />,
                    title: "Post-Launch Care",
                    desc: "2 months free maintenance and support included with every project"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          /* Pricing Plans */
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-indigo-500 dark:border-indigo-600 shadow-indigo-200 dark:shadow-indigo-900/50 transform md:-translate-y-5' 
                    : 'border-gray-100 dark:border-gray-700 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {plan.bestFor}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}{plan.duration}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => handlePlanSelect(plan)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/30'
                      : 'border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Contact Form Modal */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedPlan?.name} Plan Inquiry
                    </h3>
                    <button 
                      onClick={() => {
                        setShowContactForm(false);
                        setSubmitStatus(null);
                      }}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      aria-label="Close modal"
                    >
                      <FiX size={24} />
                    </button>
                  </div>

                  {submitStatus ? (
                    <div className={`p-4 rounded-lg mb-6 ${
                      submitStatus.success 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      <div className="font-medium">{submitStatus.message}</div>
                      {submitStatus.success && (
                        <div className="text-sm mt-2">
                          We'll follow up within 24 hours. Check your spam folder if you don't see our email.
                        </div>
                      )}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="plan" value={selectedPlan?.name} />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                          placeholder={`Tell us about your ${selectedPlan?.name.toLowerCase()} project needs...`}
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSending}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-indigo-500/30"
                      >
                        {isSending ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FiMessageSquare className="mr-3" size={18} />
                            Send Project Inquiry
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;