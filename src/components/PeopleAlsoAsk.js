import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const PeopleAlsoAsk = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What file formats are supported?",
      answer: "We support JPG, PNG, and PDF files for text extraction.",
      icon: <FiZap className="floating-icon"/>
    },
    {
      question: "Is there a file size limit?",
      answer: "Current limit is 25MB per file. We'll increase this in future updates.",
      icon: <div className="gradient-dot"></div>
    },
    {
      question: "How accurate is the text extraction?",
      answer: "Our AI achieves 98% accuracy for printed text and 92% for handwritten text.",
      icon: <div className="animated-sparkle"></div>
    },
    {
      question: "Is my data secure?",
      answer: "All files are processed securely and deleted automatically after 1 hour.",
      icon: <FiHelpCircle className="floating-icon"/>
    }
  ];

  return (
    <section className="modern-faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decorator"></span>
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">Quick answers to common questions</p>
        </div>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.icon}
                <div className="faq-content">
                  <div className="faq-header">
                    <span className="faq-number">0{index + 1}</span>
                    <h3>{faq.question}</h3>
                    {activeIndex === index ? 
                      <FiChevronUp className="arrow-icon"/> : 
                      <FiChevronDown className="arrow-icon"/>
                    }
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="faq-answer"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="hover-light"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleAlsoAsk;