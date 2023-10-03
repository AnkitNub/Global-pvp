import React from "react";
import FAQ from "./faq";
import { useState } from "react";
import "./Details.css";
import image1 from "../images2/1.webp";
import image2 from "../images2/2.webp";
import image3 from "../images2/3.webp";
import image4 from "../images2/4.webp";
import image5 from "../images2/5.webp";

const Details = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "Quality Assurance",
      answer:
        "We rigorously vet our products to ensure they meet international quality standards.",
      open: false,
      image: image2,
    },
    {
      question: "Innovation",
      answer:
        "We stay at the forefront of healthcare technology, offering the latest advancements.",
      open: false,
      image: image4,
    },
    {
      question: "Customer Centric Approach",
      answer:
        "Your satisfaction is our priority. We provide responsive customer support and flexible solutions.",
      open: false,
      image: image3,
    },
    {
      question: "Global Reach",
      answer:
        "We serve clients worldwide, making healthcare accessible to all corners of the globe.",
      open: false,
      image: image1,
    },
    {
      question: "Competitive Pricing",
      answer: "We offer competitive pricing without compromising on quality.",
      open: false,
      image: image5,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <>
      <h1>Why Choose Global VOV Trading</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="partnership">
        <h1>Partnerships</h1>
        <p>
          We believe in collaborative partnerships. Whether you're a healthcare
          provider, distributor, or institution, we are eager to work with you
          to address your specific needs and requirements. Together, we can
          elevate healthcare standards.
        </p>
        <a href="">Learn More</a>
      </div>
    </>
  );
};

export default Details;
