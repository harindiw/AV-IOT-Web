import React, { useEffect } from "react";
import p1 from "../../assets/img/p1.jpg";
import p2 from "../../assets/img/p2.jpg";
import p3 from "../../assets/img/p3.jpg";
import p4 from "../../assets/img/p4.jpg";
import p5 from "../../assets/img/p5.jpg";

import "./Stories.css";

export const Stories = () => {
  const images = [p1, p2, p3, p4, p5]; // Array of local image sources

  useEffect(() => {
    const handleScroll = () => {
      const projectContainer = document.querySelector(".project_container");
      const images = projectContainer.querySelectorAll(".project_img");

      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the bottom position of the image relative to the viewport
        const bottomOffset = rect.bottom - windowHeight;

        // Animate the image if its bottom is within the viewport
        if (bottomOffset <= -1) {
          image.classList.add("appear");
        } else {
          image.classList.remove("appear");
        }
      });
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projects">
      <h1 className="project_h1">Our Successful Stories</h1>
      <div className="project_container">
        {images.map((image, index) => (
          <img
            className="project_img"
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
