import React from 'react';
import './LandingPage1.css';

const LandingPage1 = props => {
  return (
    <div className="container">
      <section className="banner">
        <div className="heading">
          <h1>Prisoner Skills</h1>
          <p>We connect people that are currently incarcerated with employers that can provide income, training, and a satisfying work environment.</p>
        </div>

        <div className="action-container">
          <div>
            <h3>Are you a prison administrator that wants to give your prisoners an opportunity?</h3>
            <button>Contact Us</button>
          </div>
          <div>
            <h3>Are you an employer that wants to provide an opportunity to those in need?</h3>
            <button onClick={() => props.history.push('/prisons')}>Search</button>
          </div>
        </div>
      </section>

      <section className="important">
        <h2>This is Important</h2>
        <p>We help create opportunities for people</p>
        <ul>
          <li>Real Life Employable Skills</li>
          <li>A Sense of Purpose</li>
          <li>A Fair Wage</li>
          <li>Contribution to Society</li>
        </ul>
      </section>

      <section className="media">
        <h2>Don't Take Our Word For Why This is Important</h2>

        <div className="article-container">
          <a href="https://www.prisonpolicy.org/reports/outofwork.html" target="_blank">
            <div className="article">
              <h3>Out of Prison & Out of Work</h3>
              <p>"Estimate of unemployment among the 5 million formerly incarcerated people living in the United States. Our analysis shows that formerly incarcerated people are unemployed at a rate of over 27% — higher than the total U.S. unemployment rate during any historical period, including the Great Depression." </p>
            </div>
          </a>

          <a href="https://www.ncjrs.gov/pdffiles/workampr.pdf" target="_blank">
            <div className="article">
              <h3>South Carolina Takes the Initiative</h3>
              <p>"Three companies have set up successful joint ventures that employ over 400 inmates in South Carolina’s prisons. Major companies and institutions like IBM, Victoria’s Secret, and Emory University purchase products manufactured in South Carolina’s prisons."</p>
            </div>
          </a>

          <a href="https://www.latimes.com/opinion/op-ed/la-oe-bozelko-prison-labor-20171020-story.html"  target="_blank">
            <div className="article">
              <h3>What is Prison Labor?</h3>
              <p>"Some call prison labor the new Jim Crow because of the outsized number of black and brown inmates in U.S. prisons. It's a facile charge, and worse, it may be keeping progressive companies away from prison projects. Socially conscious businesses and agencies are likely to pay inmates higher wages, train them for better jobs and do more to prepare them for life after prison..."</p>
            </div>
          </a>

        </div>
      </section>

    </div>
  )
}

export default LandingPage1;