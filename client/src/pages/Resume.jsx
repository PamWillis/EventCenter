import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Alan Mecca</h1>
        <address>
          6807 Grimaldi Court<br />
          Raleigh, North Carolina, 27612
        </address>
        <p>Email: <a href="mailto:amecca1968@gmail.com">amecca1968@gmail.com</a></p>
        <p>Phone: (321) 578-2576</p>
      </header>

      <section className="professional-summary">
        <h2>Professional Summary</h2>
        <p>Dynamic leader with 16 years of experience in managing and growing an online business coupled with a strong foundation in technology. Proven ability in strategic planning, stakeholder management, and driving successful business outcomes. Expertise in bridging the gap between business and IT, ensuring seamless collaboration and optimization. Adept in maximizing sales, profit margins, and enhancing customer experiences. Presently expanding technical proficiency through a Full Stack Developer course at UNC Chapel Hill.</p>
      </section>

      <section className="technical-skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Full Stack Development</li>
          <li>Salesforce</li>
          <li>APIs</li>
          <li>CRM</li>
          <li>Digital Transformation</li>
          <li>MS Office Suite</li>
          <li>HubSpot</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>Crystal Reports</li>
          <li>JavaScript</li>
          <li>Website Design</li>
          <li>Business Analysis</li>
          <li>E-Commerce</li>
          <li>Financial Reporting</li>
          <li>Process Analysis</li>
          <li>Application Integration</li>
        </ul>
      </section>

      <section className="professional-experience">
        <h2>Professional Experience</h2>
        <article>
          <h3>The Personalized Doormats Company | September 2007 - Present</h3>
          <p>President of Operations</p>
          <ul>
            <li>Steered a $3 million B2B and B2C online business, specializing in logo mats and personalized doormats.</li>
            <li>Demonstrated exceptional leadership in strategic planning, ensuring alignment of Business, Product, and IT departments for optimal results.</li>
            <li>Oversaw all facets of business management, from financial oversight to digital strategy implementation.</li>
            <li>Instituted best practices for exemplary customer service and rapid product delivery.</li>
            <li>Developed and integrated proprietary applications to enhance operational efficiency and accuracy.</li>
            <li>Spearheaded numerous digital initiatives, emphasizing platform enhancements and outstanding customer UX.</li>
            <li>Led efforts in business research, data gathering, and effectively communicated insights to a diverse team.</li>
          </ul>
        </article>
        <article>
          <h3>Veritas | September 1999 - September 2007</h3>
          <p>Sales Technology Specialist</p>
          <ul>
            <li>Managed a sophisticated Salesforce CRM system, contributing to the efficacy of a $5B sales force.</li>
            <li>Played a pivotal role as both product and project manager, overseeing critical data projects and system integrations.</li>
          </ul>
        </article>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>Bachelor of Science in Economics, Kansas State University, Manhattan, KS</p>
        <p>Full Stack Developer Course (In Progress), UNC Chapel Hill</p>
      </section>
    </div>
  );
};

export default Resume;
