import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Experience</div>
        <div className="BigCard">

          {/* Bitcoin.com Experience */}
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="AboutBio">
              <h1><strong>Backend Developer - Bitcoin.com</strong></h1>
              <p><strong>Role Progression:</strong> Intern (May 2024 – Nov 2024) → Full-Time (Nov 2024 – Present).</p>
              <p>
                • Developed scalable, event-driven microservices using RxJava, Spring Boot, gRPC, and Kafka, building highly concurrent, non-blocking systems. Designed and implemented APIs for broadcast, transaction history, and balance services, supporting EVM chains and Solana, enabling seamless blockchain interactions through dedicated RPC nodes for real-time data processing.
              </p>
              <p>
                • Implemented transaction simulation for Ethereum and Polygon on the Verse DEX, providing users with visibility on gas costs and potential failures before confirming transactions. This feature led to a 15% increase in user retention by mitigating concerns over excessive fees during network congestion and improving transaction transparency.
              </p>
              <p>
                • Architected a multi-chain wallet system supporting BTC, BCH, EVM chains, and Solana. Designed reusable interfaces and abstract classes, enabling easy integration of custom blockchain implementations while ensuring scalability and maintainability.
              </p>
              <p>
                • Designed and implemented market data APIs for real-time crypto price feeds and metadata, leveraging Java, Kafka, and multithreading to efficiently source and format data from various exchanges. Built concurrent, high-performance systems that deliver real-time updates via REST and GraphQL while ensuring scalability and minimal latency.
              </p>
            </div>
          </ScrollAnimation>

          {/* SquareBoat Experience */}
          <ScrollAnimation animateIn="fadeInLeft" style={{ marginTop: "40px" }}>
            <div className="AboutBio">
              <h1><strong>Software Developer Intern - SquareBoat</strong></h1>
              <p>
                I gained valuable experience during my time at SquareBoat, where I initiated and independently executed the creation of a comprehensive job portal where candidates can search and apply for jobs.
                Recruiters can view the candidates' applications for the jobs posted by them.
              </p>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
