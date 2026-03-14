import React from 'react';
import { Section } from '../Section';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What's the registration deadline?",
    answer: "48 hours before the event. Don't wait till the last second, we don’t like last-minute surprises! ⏳",
  },
  {
    question: "Do I need to have a team?",
    answer: "Great ideas rarely fly solo! ✨ Form a team of 2 to 4 members 👥 and collaborate to innovate 💡🚀.",
  },
  
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and all your brilliant ideas. Power up and let's get hacking! 🔌",
  },
  {
    question: "Is there a participation fee?",
    answer: "Nope! It's all free, thanks to our generous sponsors. 🎉",
  },
  {
    question: "What skill level is required?",
    answer: "Everyone’s welcome, whether you’re a coding wizard 🧙‍♂️ or just met ‘Hello World.’",
  },
  {
    question: "Will Wi-Fi and food be provided?",
    answer: "Of course! Stay connected and full of energy. No hungry hackers here! 🍔",
  },
  {
    question: "How are projects judged?",
    answer: "Creativity, technical skills, design, and impact. Just wow us—no bribes allowed! 😉",
  },
  {
    question: "Where can I get more answers?",
    answer: "Still curious? Connect with us through the links below and feel free to reach out anytime! 📱",
  },
  {
    question: "Is the hackathon online or offline?",
    answer: "Offline only! Real humans, real connections, real fun. 🌍",
  },
];


export function FAQSection() {
  return (
    <Section id="faq" title="Frequently Asked Questions">
      <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-6" style={{ backgroundColor: 'rgba(1, 1, 7, 0.5)' }}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </Section>
  );
}