import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch.</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send Us a Message</h3>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send Us a email</h3>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Social Media</h3>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    margin: 2rem;
    color: black;
  }
`;

export default ContactUs;
