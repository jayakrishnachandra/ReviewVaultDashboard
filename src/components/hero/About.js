import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About ReviewVault</h2>
      <p>
        <strong>ReviewVault</strong> is an interactive platform designed to
        browse IMDb ratings and submit reviews for your favorite movies. The
        application provides users with a seamless experience to explore movie
        ratings and share their opinions with others.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>Submit reviews securely with a robust management system.</li>
        <li>Responsive and user-friendly interface built with React.js.</li>
        <li>Efficient data handling powered by Spring Boot and MongoDB.</li>
      </ul>
      <h4>Technologies Used</h4>
      <ul>
        <li>Frontend: React.js</li>
        <li>Backend: Spring Boot</li>
        <li>Database: MongoDB</li>
      </ul>
      <p>
        Whether you're a movie enthusiast or just curious about ratings,
        ReviewVault is your go-to app for reliable movie reviews and insights.
      </p>
    </div>
  );
};

export default About;
