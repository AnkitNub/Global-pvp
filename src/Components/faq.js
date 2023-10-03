import React from "react";
import "./faq.css";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">
        <div className="child">
          <img src={faq.image} />
        </div>
        <div className="child">{faq.answer}</div>
      </div>
    </div>
  );
}

export default FAQ;
