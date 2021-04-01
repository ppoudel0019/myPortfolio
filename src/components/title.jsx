import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -120px;
  text-align: center;
  strong {
    font-size: 1.20em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 180;
    letter-spacing: 8px;
    .main {
      font-size:80px;
    }
    .sub {
      font-size: 45px;
      letter-spacing: 2px;
    }
  }
`;

const Title = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Pooja Poudel</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Software Developer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default Title;
