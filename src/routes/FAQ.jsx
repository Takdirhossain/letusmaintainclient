import React, { useState } from 'react';

function FAQ() {
  // Define an array of FAQ items
  const faqs = [
    {
      question: 'Q1. How does i Signup?',
      answer: 'Answer 1',
    },
    {
      question: 'Q2. What methods of payment do you accept?',
      answer: 'Answer 2',
    },
    {
      question: 'Q3. How do i cancel my subscription?',
      answer: 'Answer 3',
    },
    {
      question: 'Q4. What do you mean by services allotted?',
      answer: 'Answer 4',
    },
    {
      question: 'Q5. How do i retrieve my username or password?',
      answer: 'Answer 5',
    },
    {
      question: 'Q6. What if i dont pay my subscription fees?',
      answer: " Answer 6 ",
    },
    // Add more FAQ items as needed
  ];

  // Define state for the open/closed state of each FAQ item
  const [openStates, setOpenStates] = useState(new Array(faqs.length).fill(false));

  // Define a function to toggle the open/closed state of an FAQ item
  const toggleOpenState = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
       
       <>
        <h1 class="text-3xl font-bold mt-2  text-center">Frequently Asked Quetions</h1>
        <p class=" text-xl mt-2 text-center">
        Questions You May Have- Everything You Need To Know
          </p>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {faqs.map((faq, index) => (
      <div key={index} className="accordion-item border-b border-gray-500">
        <div
          className="accordion-title flex justify-between items-center py-3 cursor-pointer"
          onClick={() => toggleOpenState(index)}
        >
          <span className="text-lg font-medium">{faq.question}</span>
          <svg
            className={`w-6 h-6 arrow-icon ${openStates[index] ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        <div className={`accordion-content pb-3 ${openStates[index] ? '' : 'hidden'}`}>
          <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
  </>
  );
}

export default FAQ;
