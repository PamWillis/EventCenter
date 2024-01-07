import React from 'react';
import aboutImage from '../assets/home/about.jpg';
import buyImage from '../assets/home/buyImage.jpg';
import projectImage from '../assets/home/project.jpg';
import resumeImage from '../assets/home/resume.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <div className="image-links-container">
        <Link to="/AboutUs">
        <img src={aboutImage} alt="about me" />
          <p>About Us</p>
        </Link>
        <Link to="/product">
          <img src={buyImage} alt="Buy-Now" />
          <p>Products</p>
        </Link>
        <Link to="/project">
          <img src={projectImage} alt="Project" />
          <p>Projects</p>
        </Link>
        <Link to="/contact">
          <img src={resumeImage} alt="Resume" />
          <p>Contact\</p>
        </Link>
      </div>
    </div>
  );
}