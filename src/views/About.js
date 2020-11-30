import React, { Component } from 'react';
import Photo from '../assets/kaitvan-professional-photo.jpeg';
import Technology from '../components/Technology';

class About extends Component {
  technologies = ['React', 'JavaScript', 'Bootstrap', 'CSS', 'HTML', 'jQuery', 'SASS', 'Firebase'];

  render() {
    const showTechnologies = () => (
      this.technologies.map((skill) => <Technology skill={skill}/>)
    );

    return (
      <div className='main'>
        <h1 className='title'>Hi, I'm Kaitlyn. Nice to meet you.</h1>
        <div className='about'>
          <div className='text'>
              <p>My love of learning and desire to empower others led to me teaching, and those same factors motivated me to pursue software development. My experience designing meaningful learning experiences in the classroom combined with my passion for creative problem-solving and collaboration made software development a natural leap. As a developer, I want to build purposeful tools that improve our global community and connect people across the world with technology solutions.</p>
              <p>I am interested in UX/UI design, capitalizing on my experience as an educator to design engaging experiences with a diverse range of users in mind. This field presents unique challenges that require both logic and creativity—an interesting combination of skills with countless opportunities for growth and development.</p>
              <p>Additionally, I am also passionate about continuing to empower young women to pursue careers in STEM. As a self-proclaimed math nerd in high school, I wish I had seen more female role models encouraging young women like me to pursue STEM opportunities. If this is something you are also interested in, let’s connect! </p>
          </div>
          <div className='about-photo'>
            <img className='photo' src={Photo} alt='Kaitlyn'/>
            <div className='d-flex flex-wrap justify-content-end mt-4 ml-5'>
              {showTechnologies()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
