import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Image, Description } from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServiceSection = () => {
  const [element, animator] = useScroll();
  return (
    <Hidden>
      <Services
        variants={scrollReveal}
        initial="hidden"
        animate={animator}
        ref={element}
      >
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="Clock"></img>
                <h3>Efficient</h3>
              </div>
              <p>lorem blah blah blah</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork"></img>
                <h3>Teamwork</h3>
              </div>
              <p>lorem blah blah blah</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm"></img>
                <h3>Diaphragm</h3>
              </div>
              <p>lorem blah blah blah</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={money} alt="money"></img>
                <h3>Affordable</h3>
              </div>
              <p>lorem blah blah blah</p>
            </Card>
          </Cards>
        </Description>

        <Image>
          <img src={home2} alt="home2"></img>
        </Image>
      </Services>
    </Hidden>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    margin-top: 10rem;
  }
`;
const Icon = styled.div`
  img {
    width: 30%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 13rem;
  .icon {
    display: flex;
    align-items: center;
    img {
      width: 30%;
      padding-right: 1rem;
    }
    h3 {
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;

export default ServiceSection;
