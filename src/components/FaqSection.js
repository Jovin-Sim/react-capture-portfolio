import React, { useState } from "react";
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedules">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </Toggle>
        <Toggle title="Different Payments">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
