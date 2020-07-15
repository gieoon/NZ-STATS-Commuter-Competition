import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {
  DATA_URL_ROOT
} from '../constants';
import right from '../assets/right.svg';

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    fetch(DATA_URL_ROOT + "/faq_data")
      .then((response) => {

        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setFaq(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>About | NZ Commute</title>
        <meta name="title" content="Visualization of Commuter data in NZ" />
      </Helmet>
      <div className="title"> 
        <Link to="/">
          <span>New Zealand </span>
          Commute  
        </Link>
      </div>
      <div className="FAQ">
        {faq.map((faq, index) => {
          return (
            <div
              key={index}
              className="faq fadeInUp"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <h2 className="question">{faq.question}</h2>
              <h2
                className="answer"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></h2>
            </div>
          );
        })}
        <Link to='/' id="back-button" className="faq fadeInUp">
          <img src={right} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default FAQ;
