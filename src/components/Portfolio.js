import React from 'react';
import Project from './Project';
import movieDB from '../images/movieDB.png';
import webhosting from '../images/kamimura-hosting.jpg';
import travel from '../images/portfolio-travel.jpg';
import realEstate from '../images/real-estate.jpg';
import portfolio from '../images/portfolio.jpg';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="container">
          <h2>A couple of projects I've been working on.</h2>
          <h3>Mobile first, with a fully responsive design. As it should be.</h3>
          <hr />
          <Project 
            image={webhosting}
            title="Hosting"
            description="A fully responsive website for a fictional webhosting company written in HTML5 and SASS using Gulp.js as task runner."
            githubURL="https://github.com/kekami/kamimura-hosting"
            liveURL="http://mute-motion.surge.sh/"
          />
          <Project 
            image={travel}
            title="Travel"
            description="A fully responsive website for a fictional travel website written in HTML5 and SASS following BEM methodology using Gulp.js as task runner."
            githubURL="https://github.com/kekami/portfolio-travel"
            liveURL="http://thundering-island.surge.sh/"
          />
          <Project 
            image={realEstate}
            title="Real Estate"
            description="A fully responsive website for a fictional real estate website written in HTML5 and SASS following BEM methodology using Gulp.js as task runner."
            githubURL="https://github.com/kekami/real-estate"
            liveURL="http://grieving-bit.surge.sh/"
          />
          <Project 
            image={portfolio}
            title="Portfolio Website"
            description="A fully responsive single page application written in React. React-Router v4 is used for frontend routing and React Transition Group for route based transitions."
            githubURL="https://github.com/kekami/portfolio-website"
            liveURL="www.kevinkamimura.com"
          />
          <Project
            image={movieDB}
            title="MovieDB"
            description="Full-stack movie database with features such as the ability to search and favorite movies. Created to practice and demonstrate React/Redux, Node/Express, REST Apis, Authentication, MongoDB and asynchronous JavaScript."
            githubURL="https://github.com/kekami/movieDB"
            liveURL="https://whispering-falls-55926.herokuapp.com/"
          />
        </div>
      </div>
  )
}

export default Portfolio;