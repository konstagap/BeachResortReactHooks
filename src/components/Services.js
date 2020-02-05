import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const services = [
  {
    icon: <FaCocktail />,
    title: "Free coctails",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, laudantium?"
  },
  {
    icon: <FaHiking />,
    title: "Endless hiking",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, laudantium?"
  },
  {
    icon: <FaShuttleVan />,
    title: "Free shuttle",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, laudantium?"
  },
  {
    icon: <FaBeer />,
    title: "Great beer",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, laudantium?"
  }
];
export default function Services() {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article className="service" key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
