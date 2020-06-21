import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

const DATA_ROOT = "http://localhost:5000";
const DATA_URL = DATA_ROOT + "/faq_data";

function FAQ(props) {
    const [faq, setFaq] = useState([]);
  
    useEffect(() => {
      getFAQs();
    }, []);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const getFAQs = () => {
      fetch(DATA_URL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFaq(data.faq);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div className="FAQ">
        <Helmet>
          <title>FAQ - NZ Commuter Data</title>
          <meta
            name="title"
            content="Visualization of Commuter data in NZ"
          />
        </Helmet>
        {faq.map((faq, index) => {
          return (
            <div
              key={index}
              className="faq fadeInUp"
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <h2 className="question">{faq.question}</h2>
              <h2
                className="answer"
                dangerouslySetInnerHTML={{__html: faq.answer}}
              ></h2>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default FAQ;